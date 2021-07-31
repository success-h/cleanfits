import React from "react";
import Title from "../Title/Title";
import { Link } from "react-router-dom";

const PricingTable = ({ title = "" }) => {
  return (
    <div className="pricing-table py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <Title title={title} />
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5">
            <div className="card">
              <div className="card-header bg-white">
                <h2 className="text-center" style={{ fontSize: "3rem" }}>
                  Basic
                </h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item">
                    <span>1 pick up/month</span>
                  </li>
                  <li className="list-group-item">
                    <span>Unlimited Laundry</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                </ul>
                <h2 className="text-center my-3" style={{ fontSize: "3rem" }}>
                  N15, 000
                </h2>
              </div>

              <div className="card-footer text-center bg-white">
                <Link
                  to="/subscribe/basic"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5">
            <div className="card">
              <div className="card-header bg-white">
                <h2 className="text-center" style={{ fontSize: "3rem" }}>
                  Enterprise
                </h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item">
                    <span>2 picks up/month</span>
                  </li>
                  <li className="list-group-item">
                    <span>Unlimited Laundry</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                </ul>
                <h2 className="text-center my-3" style={{ fontSize: "3rem" }}>
                  N25, 000
                </h2>
              </div>
              <div className="card-footer text-center bg-white">
                <Link
                  to="/subscribe/enterprise"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-5">
            <div className="card">
              <div className="card-header bg-white">
                <h2 className="text-center" style={{ fontSize: "3rem" }}>
                  Premium
                </h2>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush text-center">
                  <li className="list-group-item">
                    <span>3 picks up/month</span>
                  </li>
                  <li className="list-group-item">
                    <span>Unlimited Laundry</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                  <li className="list-group-item">
                    <span>Lorem ipsum dolor sit amet.</span>
                  </li>
                </ul>
                <h2 className="text-center my-3" style={{ fontSize: "3rem" }}>
                  N35, 000
                </h2>
              </div>
              <div className="card-footer text-center bg-white">
                <Link
                  to="/subscribe/premium"
                  className="btn btn-primary btn-block btn-lg"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <Link to="/pricing" className="btn btn-outline-primary">
              See All Pricing Options{" "}
              <span style={{ fontWeight: 600, fontSize: "1rem" }}>></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
