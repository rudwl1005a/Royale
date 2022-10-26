import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "../HomePage";
import AboutPage from "../AboutPage";
import OurGamePage from "../OurGamePage";
import GameDetailsPage from "../GameDetailsPage";
import MatchPage from "../MatchPage";
import MatchDetailsPage from "../MatchDetailsPage";
import ErrorPage from "../ErrorPage";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import BlogPage from "../BlogPage";
import BlogDetailsPage from "../BlogDetailsPage";
import ProductPage from "../ProductPage";
import ProductDetailsPage from "../ProductDetailsPage";
import CartPage from "../CartPage";
import CheckoutPage from "../CheckoutPage";
import ContactPage from "../ContactPage";

const AllRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/games" element={<OurGamePage />} />
          <Route exact path="/game-single" element={<GameDetailsPage />} />
          <Route exact path="/match" element={<MatchPage />} />
          <Route exact path="/match-single" element={<MatchDetailsPage />} />
          <Route exact path="/error" element={<ErrorPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/blog" element={<BlogPage />} />
          <Route exact path="/blog-single" element={<BlogDetailsPage />} />
          <Route exact path="/products" element={<ProductPage />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route
            exact
            path="/product-single"
            element={<ProductDetailsPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AllRoute;
