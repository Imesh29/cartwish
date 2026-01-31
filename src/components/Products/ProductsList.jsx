import React, { useEffect, useState } from "react";

import apiClients from "../../utils/api-clients";
import "./productsList.css";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClients
      .get("/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="products_list_section">
      <header className="align_center products_list_header">
        <h2>Products</h2>
        <select name="" id="" className="products_sorting">
          <option value="">Relavance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>
      <div className="products_list">
        {error && <em className="form_error">{error}</em>}
        {products.map((products) => (
          <ProductCard
            key={products._id}
            id={products._id}
            image={products.images[0]}
            price={products.price}
            title={products.title}
            rating={products.reviews.rate}
            ratingCounts={products.reviews.counts}
            stock={products.stock}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsList;
