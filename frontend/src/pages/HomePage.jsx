import React from "react";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Sliders from "../components/Slider/Sliders";
import Campaigns from "../components/Campaigns/Campaigns";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/Brands/Brands";
import CampaigsSingle from "../components/Campaigns/CampaignSingle";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Campaigns />
      <Products />
      <Blogs />
      <Brands />
      <CampaigsSingle />

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
