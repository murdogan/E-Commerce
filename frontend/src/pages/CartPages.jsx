import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Cart from "../components/Cart/Cart";

const CartPages = () => {
  return (
    <React.Fragment>
      <Header />
      <Cart />
      <Footer />
    </React.Fragment>
  );
};

export default CartPages;
