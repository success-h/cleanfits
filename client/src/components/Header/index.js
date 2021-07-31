import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context";
import "./Header.css";

const Header = ({ pathname = "", user, signOut }) => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartFromLocalStorage.length !== 0) {
      dispatch({
        type: "ADD_ITEMS_TO_CART",
        payload: cartFromLocalStorage
      });
    }
    //console.log(123, cartFromLocalStorage);
  }, []);

  //console.log(pathname)
  return (
    <header className={pathname === "/" ? "header" : null}>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          backgroundColor: "#fff",
          zIndex: 1500,
          borderBottom: "1px solid #ccc"
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src="/images/logo.svg"
              height="20"
              className="d-inline-block align-top"
              alt=""
              style={{ marginTop: 5 }}
            />
          </Link>
          {/* <Link className="navbar-brand" to="/">
            Cleanfits
          </Link> */}

          <Link
            to="/cart"
            className="btn btn-light"
            style={{
              background: "transparent",
              position: "relative",
              display: "flex"
            }}
          >
            <i
              className="fas fa-shopping-cart"
              style={{ position: "relative" }}
            />
            {cart.length === 0 ? (
              <span className="badge badge-danger badge-cart">
                {cart.length}
              </span>
            ) : (
              <span className="badge badge-primary badge-cart">
                {cart.length}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "navbar-toggler collapsed" : "navbar-toggler"}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className={
              isOpen
                ? "collapse navbar-collapse show"
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              {/* <li className={pathname === '/products' ? 'nav-item active' : 'nav-item'}>
                <Link style={{ fontWeight: '500' }} className="nav-link"  to="/products">Products</Link>
              </li> */}
              <li
                className={
                  pathname === "/pricing" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  style={{ fontWeight: "500" }}
                  className="nav-link"
                  to="/pricing"
                >
                  Pricing
                </Link>
              </li>
              <li
                className={
                  pathname === "/how-it-works" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  style={{ fontWeight: "500" }}
                  className="nav-link"
                  to="/how-it-works"
                >
                  How it Works
                </Link>
              </li>
              <li
                className={
                  pathname === "/about" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  style={{ fontWeight: "500" }}
                  className="nav-link"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li
                className={
                  pathname === "/contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link
                  style={{ fontWeight: "500" }}
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="btn-group">
              {user !== null ? (
                <button onClick={() => signOut()} className="btn btn-primary">
                  SignOut
                </button>
              ) : (
                <>
                  <Link to="/signin" className="btn btn-light">
                    Signin
                  </Link>
                  <Link to="/signup" className="btn btn-primary">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <br />
      <br />
      {pathname === "/" ? (
        <div className="overlay">
          <div
            className="container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              height: "100vh"
            }}
          >
            <h1 className="text-white hero-title">
              On-Demand Premium Dry Cleaning Services
            </h1>
            <Link to="/signup" className="btn btn-light btn-lg mt-5">
              SIGN ME UP
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
