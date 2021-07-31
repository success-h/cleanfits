import React from "react";
import Layout from "../Layout";
import HowItWorks from "../components/Content/HowItWorks";
import { Link } from "react-router-dom";

const HowItWorksPage = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <HowItWorks title="How it Works" />
      <div className="text-center" style={{ position: "relative" }}>
        <div
          style={{
            background: "url('/images/laundry2.webp') no-repeat fixed 100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "block",
            width: "100%",
            minHeight: "100vh",
            position: "relative"
          }}
        />
        <div
          className="text-white my-3 mx-auto text-center w-100"
          style={{ position: "absolute", top: "50vh" }}
        >
          <h1 className="bd-title mb-4 text-white">
            Free Delivery on All Orders
          </h1>
          <Link to="/pricing" className="btn btn-light">
            Place Order Now
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorksPage;
