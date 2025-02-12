import React from "react";
import Navbar from "../components/navbar.js";
import Footer from "./footer.js";


const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer/>
  </>
);

export default Layout;
