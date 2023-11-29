import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
//import ProductDetailsPage from "./pages/ProductDetailsPage";
//import BlogPage from "./pages/BlogPage";
//import BlogDetailPage from "./pages/BlogDetailPage";
// import CartPages from "./pages/CartPages";
// import { ContactPage } from "./pages/ContactPage";
//import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
//import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
