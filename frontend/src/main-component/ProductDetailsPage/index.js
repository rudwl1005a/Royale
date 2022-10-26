import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import ProductsDetails from "../../components/ProductsDetails";
import Footer from "../../components/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>Product Details</>} />
      <ProductsDetails />
      <Footer />
    </>
  );
};
export default ProductDetailsPage;
