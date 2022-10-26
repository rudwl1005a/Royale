import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Matches from "../../components/Matches";
import Footer from "../../components/Footer";

const MatchPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Matches</>} />
      <Matches />
      <Footer />
    </>
  );
};
export default MatchPage;
