import React from "react";

import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Video from "../../components/Video";
import Games from "../../components/Games";
import NextMatch from "../../components/NextMatch";
import Promo from "../../components/Promo";
import Team from "../../components/Team";
import PreOrder from "../../components/PreOrder";
import LatestNews from "../../components/LatestNews";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Video />
      <Games />
      <NextMatch />
      <Promo />
      <Team />
      <PreOrder />
      <LatestNews />
      <Footer />
    </>
  );
};
export default HomePage;
