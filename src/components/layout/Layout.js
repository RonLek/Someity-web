import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, props }) => {
  return (
    <>
      <Helmet>
        <title>Someity | Making the Web Accessible for All</title>
      </Helmet>
      <Header props={props} />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
