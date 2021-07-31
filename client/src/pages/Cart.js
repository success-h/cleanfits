import React, { useContext, useState, useEffect, useRef } from "react";
import { AppContext } from "../Context";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import CartItem from "../components/Content/CartItem";
import uuid from "uuidv4";

const Cart = () => {
  /**
   * We are simply consuming thw global state and dispatch here using useContext hook
   * with this we get state and a way to update state passed down form the parent component
   * thereby avoiding prop drilling
   * @params state, dispatch
   */
  const {
    state: { cart }
  } = useContext(AppContext);

  /**
   * This is used to keep tracl of the total price a user is to pay
   * as they add or remove items in the cart
   * @init ==> total = 0
   */
  const [total, setTotal] = useState(0);

  /**
   * This piece is state is used to keep track of the current item being added to the cart
   * by the user, it is initialised to an empty object for now because we are going to be
   * setting the state values dynamically as the user increments or decrements the count
   * of individual items in the cart.
   * @init ==> count = {}
   */
  const [count, setCount] = useState({});

  useEffect(() => {
    let prevCount = JSON.parse(localStorage.getItem("count"));
    if (prevCount !== null) setCount(prevCount);
  }, []);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  /**
   * Initialize total count to zero *
   */
  let myTotal = 0;

  /**
   * This useEffext hook takes care of updating the total price of items in cart
   * and re-renders/runs everytime  a peer depencency changes i.e cart
   */
  useEffect(() => {
    cart.forEach(cartItem => setTotal((myTotal += cartItem.price)));
  }, [cart]);

  /**
   * Increment count variable for each item clicked on in cart
   * and sets the total to the new value
   * @param {*} price
   */
  const incrementItemCount = price => {
    let myTotal = total;
    setTotal((myTotal += price));
  };

  /**
   * Decrement count variable for each item clicked on in cart
   * and sets the total to the new value
   * @param {*} price
   */
  const decrementItemCount = price => {
    let myTotal = total;
    setTotal((myTotal -= price));
  };

  return (
    <Layout>
      <div className="container pt-5">
        <div className="card bg-white mb-3">
          <div className="card-header d-flex justify-content-between align-items-center">
            <Link to="/pricing" className="btn btn-link">
              <i className="fas fa-chevron-left" /> Continue Adding
            </Link>
            {cart.length > 0 && (
              <Link to="/checkout" className="btn btn-primary">
                Checkout
              </Link>
            )}
          </div>
          <div className="card-body text-center py-5">
            {cart.length === 0 ? (
              <>
                <p className="card-text">YOUR CART IS EMPTY!</p>
                <Link to="/pricing" className="btn btn-light">
                  Start Adding Items
                </Link>
              </>
            ) : (
              <ul className="list-group list-group-flush">
                {cart.map(item => (
                  <CartItem
                    key={uuid()}
                    item={item}
                    count={count}
                    setCount={setCount}
                    incrementItemCount={incrementItemCount}
                    decrementItemCount={decrementItemCount}
                  />
                ))}
              </ul>
            )}
          </div>
          <div className="card-footer d-flex justify-content-end align-items-center">
            <p className="lead">
              <strong>SUB TOTAL = {total}</strong>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
