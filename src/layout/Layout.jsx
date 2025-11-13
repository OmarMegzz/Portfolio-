import React from "react";
import Header from "../Features/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Features/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
