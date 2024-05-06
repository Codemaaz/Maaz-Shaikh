import React from "react";
import { Contact, Home, NavBar } from ".";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Outlet />
      <NavBar />
      <Footer />

    </>
  );
};

export default Layout;
