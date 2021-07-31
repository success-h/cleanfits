import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { db, firebase, isAuthenticated } from "../auth";
import axios from "axios";

const SignupPage = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = ({ message }) => {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    isAuthenticated ? setRedirect(true) : setRedirect(false);
  }, []);

  const signup = e => {
    e.preventDefault();

    // Load spinner icon in signup button
    setIsLoading(true);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        if (user.user.uid) {
          // Signup  was successful
          // Now we proceed to add user data to cloud firestore
          let authUser = firebase.auth().currentUser;

          // db.collection("users")
          //   .add({
          //     firstname,
          //     lastname,
          //     email,
          //     phone,
          //     address,
          //     createdAt: new Date().toISOString(),
          //     updatedAt: new Date().toISOString()
          //   })
          //   .then(user => {
          //     authUser.sendEmailVerification();
          //     firebase.auth().signOut();
          //     setUser(user);
          //     setIsLoading(false);
          //   })
          //   .catch(err => {
          //     setError(err.message);
          //     setIsLoading(false);
          //   });
          axios({
            url: "/api/v1/users",
            method: "POST",
            data: {
              firstname,
              lastname,
              email,
              phone,
              address
            }
          })
            .then(res => {
              setUser(res.data.user);
              setIsLoading(false);
            })
            .catch(err => {
              setError(err.message);
              setIsLoading(false);
            });
        }
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
        window.scrollTo(0, 0);
      });
  };

  if (redirect && JSON.parse(localStorage.getItem("cart")).length > 0) {
    return <Redirect to="/cart" />;
  }

  if (redirect && JSON.parse(localStorage.getItem("cart")).length === 0) {
    return <Redirect to="/" />;
  }

  return (
    <SignupPage>
      <div className="row w-100">
        <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4 mx-auto card card-body my-5">
          <h2 className="text-center my-4">Create an Account</h2>
          {error !== null && <ErrorMessage message={error} />}
          <form className="user-login-form w-100" onSubmit={e => signup(e)}>
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input
                required
                type="firstname"
                className="form-control"
                id="firstname"
                placeholder="Enter First Name"
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstname">Last Name</label>
              <input
                required
                type="lasttname"
                className="form-control"
                id="lastname"
                placeholder="Enter Last Name"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                required
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                required
                type="number"
                id="phone"
                className="form-control"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={e => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                required
                type="password"
                className="form-control"
                id="password"
                placeholder="Create a New Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Shipping address</label>
              <textarea
                required
                id="address"
                cols="30"
                rows="7"
                value={address}
                className="form-control"
                placeholder="e.g - Plot 127, Mayne Street off Nepa office, Maitama Abuja."
                onChange={e => setAddress(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-block btn-primary mb-3">
              {isLoading !== false && (
                <span
                  className="spinner-border spinner-border-sm mr-4"
                  role="status"
                  aria-hidden="true"
                />
              )}
              SIGNUP
            </button>

            <p className="pt-2 text-muted">
              Already have an account? Click{" "}
              <Link to="/signin" className="btn-link">
                here
              </Link>{" "}
              to login.
            </p>
          </form>
        </div>
      </div>
    </SignupPage>
  );
};

export default Register;
