import React from "react";
import Header from "../components/Layout/Header/Header";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaigsSingle from "../components/Campaigns/CampaignSingle";
import Footer from "../components/Layout/Footer/Footer";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Categories />
      <Products />
      <CampaigsSingle />
      <Products />

      <Footer />
    </React.Fragment>
  );
};

export default ShopPage;
