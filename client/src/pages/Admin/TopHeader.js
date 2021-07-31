import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopHeader = ({ view, setView }) => {
  return (
    <header className="bg-white fixed-top">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-white"
        style={{
          backgroundColor: "#fff",
          zIndex: 1500
        }}
      >
        <div className="container d-flex justify-content-between">
          <Link className="navbar-brand" to="/admin">
            <img
              src="/images/logo.svg"
              height="20"
              className="d-inline-block align-top"
              alt=""
              style={{ marginTop: 5 }}
            />
          </Link>
          <div className="controls d-flex justify-content-end">
            <div className="dropdown">
              <button
                type="button"
                className="btn dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{
                  background: "transparent",
                  color: "#000"
                }}
              >
                <i className="fas fa-cog" />
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="/admin/settings">
                  Settings
                </a>
                <a className="dropdown-item" href="/">
                  Go to Main Site
                </a>
              </div>
            </div>

            <Link
              to="signup"
              className="btn btn-outline-dark"
              // style={{ background: "transparent", color: "#fff" }}
            >
              LOGOUT
            </Link>
          </div>
        </div>
      </nav>

      <div className="container">
        <ul className="nav nav-tabs justify-content-center">
          <li className="nav-item">
            <button
              onClick={e => setView("pricing")}
              className={`${
                view === "pricing" ? "btn btn-link activr" : "btn btn-link"
              }`}
            >
              Pricing
            </button>
          </li>
          <li className="nav-item">
            <button
              onClick={e => setView("orders")}
              className={`${
                view === "orders" ? "btn btn-link activr" : "btn btn-link"
              }`}
            >
              Orders
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default TopHeader;
