import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";
import Sidebar from "../components/Sidebar";
import Sidelogo from "../components/sideLogo";

const Layout = () => {

  const [sidebar, setSidebar] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const [sideLogo, setSideLogo] = useState(false);

  const handleSidebar = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 20) {
        setSidebar(true);
      }
      if (window.pageYOffset < 20) {
        setSidebar(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleSidebar);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleSidebar);
      }
    };
  }, []);

  const handleNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 300) {
        setNavbar(true);
      }
      if (window.pageYOffset < 25) {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleNavbar);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleNavbar);
      }
    };
  }, []);

  const handleSideLogo = () => {
    if (typeof window !== "undefined") {
      if (window.pageYOffset > 20) {
        setSideLogo(true);
      }
      if (window.pageYOffset < 20) {
        setSideLogo(false);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleSideLogo);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleSideLogo);
      }
    };
  }, []);

  const [sidepos, setsidePos] = useState(`sidebarnavStart`)

  const [sidelogo, setsideLogo] = useState(`sidelogoStart`)

  const [navpos, setnavPos] = useState(`barnavStart`)

  const handlesidePos = () => {
    if (typeof window !== "undefined") {
      if (!sidebar && window.pageYOffset < 20) {
        setsidePos(`sidebarnavStart sideExit`)
      }
      if (!sidebar && window.pageYOffset > 20) {
        setsidePos(`sidebarnav sideEnter`);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handlesidePos);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handlesidePos);
      }
    };
  }, []);

  const handlesideLogo = () => {
    if (typeof window !== "undefined") {
      if (!sidebar && window.pageYOffset < 20) {
        setsideLogo(`sidelogoStart logoEnter`);
      }
      if (!sidebar && window.pageYOffset > 20) {

        setsideLogo(`sidelogo logoExit`)
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handlesideLogo);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handlesideLogo);
      }
    };
  }, []);

  const handlenavPos = () => {
    if (typeof window !== "undefined") {
      if (!navbar && window.pageYOffset < 300) {
        setnavPos(`barnavStart navEnter`);

      }
      if (!navbar && window.pageYOffset > 25) {
        setnavPos(`barnav navExit`);
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handlenavPos);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handlenavPos);
      }
    };
  }, []);


  return (
    <>
      <ScrollToTop />
      <div className={
        sidelogo
      }>
        <Sidelogo />
      </div>

      <div className={navpos}>
        <Navigation />
      </div>
      <div className={
        sidepos
      }>
        <Sidebar />
      </div>

      <div id="spacer"></div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;