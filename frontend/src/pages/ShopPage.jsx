import React from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import CampaigsSingle from "../components/Campaigns/CampaignSingle";

const ShopPage = () => {
  return (
    <React.Fragment>
      <Categories />
      <Products />
      <CampaigsSingle />
      <Products />
    </React.Fragment>
  );
};

export default ShopPage;
