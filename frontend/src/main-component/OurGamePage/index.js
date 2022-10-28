import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import GamesPage from "../../components/GamesPage";
import Footer from "../../components/Footer";

const OurGamePage = () => {
  return (
    <>
      <Header />
      <PageTitle
        Title={
          <>
            Our <span>Games</span>
          </>
        }
      />
      <GamesPage />
      <Footer />
    </>
  );
};
export default OurGamePage;
