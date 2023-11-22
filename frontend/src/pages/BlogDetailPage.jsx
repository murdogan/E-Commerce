import React from "react";
import Header from "../components/Layout/Header/Header";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import Footer from "../components/Layout/Footer/Footer";

const BlogDetailPage = () => {
  return (
    <React.Fragment>
      <Header />
      <BlogDetails />

      <Footer />
    </React.Fragment>
  );
};

export default BlogDetailPage;
