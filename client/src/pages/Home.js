import React, { useEffect } from "react";
import Experience from "../components/Content/Experience";
import HowItWorks from "../components/Content/HowItWorks";
// import PricingTable from "../components/Content/PricingTable";
import GetInTouch from "../components/Content/GetInTouch";
import propTypes from "prop-types";
// import { firebase } from "../auth";

import Layout from "../Layout";
const Home = ({ location }) => {
  return (
    <Layout pathname={location.pathname}>
      <main style={{ display: "block" }}>
        <Experience />
        <HowItWorks title="How it Works" />
        <GetInTouch title="Get In Touch" />
      </main>
    </Layout>
  );
};

Home.propTypes = {
  location: propTypes.object.isRequired
};

export default Home;