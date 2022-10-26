import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import Checkout from "../../components/Checkout";
import Footer from "../../components/Footer";

const CheckoutPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Checkout Page</>} />
      <Checkout />
      <Footer />
    </>
  );
};
export default CheckoutPage;
