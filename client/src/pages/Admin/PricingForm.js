import React, { useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../../Context";
import { pathInEnv } from "../../utils";
//import reducer from '../../Reducer'

const Alert = ({ type, message }) => {
  return (
    <div
      className={`alert alert-${type} alert-dismissible fade show`}
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

const PricingForm = () => {
  const [values, setValues] = useState({
    name: "",
    price: 0,
    discount: 0,
    image: "",
    message: null
  });

  const {
    state: { pricingStatus },
    dispatch
  } = useContext(AppContext);

  const submitPricingForm = e => {
    e.preventDefault();

    // Form Data to send to server
    const data = new FormData();
    data.append("name", values.name);
    data.append("price", values.price);
    data.append("discount", values.discount);
    data.append("image", values.image);

    // RESET FORM STATE
    dispatch({ type: "ADD_PRICING_REQUEST_STARTED" });
    setValues({ name: "", price: 0, discount: 0, image: "" });

    axios({
      url: pathInEnv("/api/v1/pricing"),
      method: "POST",
      data
    })
      .then(response => {
        dispatch({ type: "ADD_PRICING_REQUEST_SUCCESS" });
        dispatch({ type: "ADD_PRICING", payload: response.data.pricing });
        setValues({ ...values, message: response.data.successMessage });
      })
      .catch(error => {
        dispatch({ type: "ADD_PRICING_REQUEST_ERROR" });
        setValues({
          ...values,
          message: "An error occured while trying to make network request"
        });
      });
  };

  return (
    <div className="pricing-form-wrapper">
      {pricingStatus === "RESOLVED" ? (
        <Alert type="success" message={values.message} />
      ) : pricingStatus === "REJECTED" ? (
        <Alert type="error" message={values.message} />
      ) : null}
      <form className="pricing-from" onSubmit={submitPricingForm}>
        <div className="form-group">
          <label htmlFor="name">Name of Product</label>
          <input
            type="text"
            value={values.name}
            onChange={e => setValues({ ...values, name: e.target.value })}
            className="form-control"
            name="name"
            id="name"
            placeholder="Name of Product"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price of Product</label>
          <input
            type="number"
            value={values.price}
            onChange={e => setValues({ ...values, price: e.target.value })}
            className="form-control"
            name="price"
            id="price"
            placeholder="Price of Product"
          />
        </div>
        <div className="form-group">
          <label htmlFor="discount">Discount (if any, in percentage)</label>
          <input
            type="number"
            value={values.discount}
            onChange={e => setValues({ ...values, discount: e.target.value })}
            name="discount"
            id="discount"
            className="form-control"
            placeholder="Discount eg 10 for  10%"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Featured Image</label>
          <input
            type="file"
            onChange={e => setValues({ ...values, image: e.target.files[0] })}
            name="image"
            id="image"
            className="form-control"
          />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
        {pricingStatus === "PENDING" && (
          <button class="btn btn-light ml-2" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            />
            <span class="sr-only">Loading...</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default PricingForm;
