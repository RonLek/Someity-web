import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, props }) => {
  return (
    <>
      <Helmet>
        <title>Someity | Making the Web Accessible for All</title>
        <meta
          name="google-site-verification"
          content="COvGhsrJCaJCRgLfmFi87H2AT5dfSt_KaqEu45In8QA"
        />
      </Helmet>
      <Header props={props} />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
