import React, { useContext } from "react";
import { AppContext } from "../../Context";

const CartItem = ({
  item,
  incrementItemCount,
  decrementItemCount,
  count,
  setCount
}) => {
  const {
    state: { cart },
    dispatch
  } = useContext(AppContext);

  const removeItemFromCart = item => {
    let cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));

    cartFromLocalStorage.forEach(cartItem => {
      if (cartItem._id === item._id) {
        dispatch({ type: "REMOVE_FROM_CART", payload: item._id });
        let newCart = cart.filter(i => i._id !== item._id);
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
    });
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        {item.name} | <strong>{item.price}</strong>
      </div>
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              decrementItemCount(item.price);
              setCount({
                ...count,
                [item._id]: count[item._id] - 1
              });
            }}
          >
            -
          </button>
          <span className="btn btn-light">{Number(count[item._id]) || 1}</span>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              incrementItemCount(item.price);
              let initial = 1;
              let value = count[item._id];
              if (value === undefined) {
                setCount({
                  ...count,
                  [item._id]: initial + 1
                });
              } else {
                setCount({
                  ...count,
                  [item._id]: count[item._id] + 1
                });
              }
            }}
          >
            +
          </button>
          <button
            type="button ml-5"
            className="btn btn-danger"
            onClick={() => removeItemFromCart(item)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
