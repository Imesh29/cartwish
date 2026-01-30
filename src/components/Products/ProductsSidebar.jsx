import React, { useState, useEffect } from "react";

import apiClients from "../../utils/api-clients";
import "./ProductsSidebar.css";
import rocket from "../../assets/rocket.png";
import LinkWithIcon from "../Navbar/LinkWithIcon";

const ProductsSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get("/category")
      .then((res) => setCategories(res.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>

      <div className="categiry_links">
        {error && <em className="from_error">{error}</em>}
        {categories.map((category) => (
          <LinkWithIcon
            id={category._id}
            title={category.name}
            link={`products?category=$(category.name)`}
            emoji={`http://localhost:5000/category/${category.image}`}
            sidebar={true}
          />
        ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
