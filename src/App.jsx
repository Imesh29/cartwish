import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Home/Homepage";
import ProductsPage from "./components/Products/ProductsPage";
import SingleProductPage from "./components/SingleProduct/SingleProductPage";
import CartPage from "./components/Cart/CartPage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Homepage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        <CartPage />
      </main>
    </div>
  );
};

export default App;
