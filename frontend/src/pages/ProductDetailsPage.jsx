import React from "react";
import Header from "../components/Layout/Header/Header";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import Footer from "../components/Layout/Footer/Footer";

const ProductDetailsPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailsPage;
