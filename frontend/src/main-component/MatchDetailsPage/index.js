import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import MatchesDetails from "../../components/MatchesDetails";
import Footer from "../../components/Footer";

const MatchDetailsPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Matches</>} />
      <MatchesDetails />
      <Footer />
    </>
  );
};
export default MatchDetailsPage;
