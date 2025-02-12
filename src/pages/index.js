// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Hero from "../components/hero";
import Menu from "../components/menu";
import About from "../components/about";
import Delivery from "../components/delivery";
import Blog from "../components/bolg";
import Reviews from "../components/reviews";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Hero />
      <Menu />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <About />
      </div>
      <Reviews />
      <div className="bg-[#F9F9F7] mb-8 py-8">
        <Delivery />
      </div>
      <Blog />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
