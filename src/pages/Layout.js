import React from "react";
import {Outlet} from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <Navigation />
      <ScrollToTop/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;