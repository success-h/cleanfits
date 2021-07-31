import React from "react";
import Title from "../Title/Title";

const HowItWorks = ({ title }) => {
  return (
    <div
      className="how-it-works bg-light py-5 mb-0"
      style={{ background: "transparent" }}
    >
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center my-5">
            <Title title={title} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between mb-3 ">
            <h2 className="lead" style={{ fontSize: "5rem", fontWeight: "5" }}>
              1
            </h2>
            <div className="text ml-4">
              <h3 className="">You Order</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, a?
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between mb-3 ">
            <h2 className="lead" style={{ fontSize: "5rem", fontWeight: "5" }}>
              2
            </h2>
            <div className="text ml-4">
              <h3 className="">We Pick Up</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, a?
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between mb-3 ">
            <h2 className="lead" style={{ fontSize: "5rem", fontWeight: "5" }}>
              3
            </h2>
            <div className="text ml-4">
              <h3 className="">We Clean</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, a?
              </p>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-between mb-3 ">
            <h2 className="lead" style={{ fontSize: "5rem", fontWeight: "5" }}>
              4
            </h2>
            <div className="text ml-4">
              <h3 className="">We Deliver</h3>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veniam, a?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
