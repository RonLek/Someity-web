import React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, props }) => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-171526438-1"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'UA-171526438-1');
        </script>

        <title>Someity | Making the Web Accessible for All</title>
      </Helmet>
      <Header props={props} />
      <main className="text-gray-900">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
