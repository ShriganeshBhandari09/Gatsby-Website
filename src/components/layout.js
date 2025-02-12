import React from "react";
import Navbar from "../components/navbar.js";


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
);

export default Layout;
