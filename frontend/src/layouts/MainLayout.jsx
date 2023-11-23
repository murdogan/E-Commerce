import React from "react";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Proptypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
