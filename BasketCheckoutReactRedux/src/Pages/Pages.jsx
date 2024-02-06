import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import ProductList from "./ProductList/ProductList";

const Pages = () => {
  return (
    <Router>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default Pages;
