import React from "react";

import "./productsList.css";
import ProductCard from "./ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Skeleton from "react-loading-skeleton";

const ProductsList = () => {
  const { data, error, isLoading } = useData("/products");
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

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
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {data?.products &&
          data.products.map((products) => (
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
