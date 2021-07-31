import React from "react";
import { Link } from "react-router-dom";

const FourOFour = () => {
  return (
    <div
      className="four-o-four"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background: "#fff"
      }}
    >
      <h1
        className="text-dark"
        style={{ fontFamily: "cursive", fontSize: "10rem" }}
      >
        404
      </h1>
      <p className="lead">You've wandered beyond oblivion, The Sadness.</p>
      <Link to="/" className="btn btn-outline-dark">
        Go Back Home
      </Link>
    </div>
  );
};

export default FourOFour;
