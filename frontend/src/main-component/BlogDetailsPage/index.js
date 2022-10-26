import React from "react";

import Header from "../../components/Header";
import PageTitle from "../../components/PageTitle";
import BlogDetails from "../../components/BlogDetails";
import Footer from "../../components/Footer";

const BlogDetailsPage = () => {
  return (
    <>
      <Header />
      <PageTitle Title={<>News Details</>} />
      <BlogDetails />
      <Footer />
    </>
  );
};
export default BlogDetailsPage;
