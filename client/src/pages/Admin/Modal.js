import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { AppContext } from "../../Context";
import { pathInEnv } from "../../utils";
//import PricingForm from './PricingForm';

const Modal = ({ currentItem }) => {
  const newValues = { ...currentItem };
  const [values, setValues] = useState({ ...newValues });
  const [isLoading, setIsLoading] = useState(false);

  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    setValues({ ...newValues });
  }, [currentItem]);

  const submitPricingForm = e => {
    e.preventDefault();

    // Form Data to send to server
    const data = new FormData();
    data.append("id", values._id);
    data.append("name", values.name);
    data.append("price", values.price);
    data.append("discount", values.discount);
    data.append("image", values.image);

    setIsLoading(true);
    console.log(values);

    axios({
      url: pathInEnv("/api/v1/pricing/edit"),
      method: "PUT",
      data
    })
      .then(response => {
        setIsLoading(false);
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
    <div
      className="modal fade"
      id="editPricingModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Update Pricing
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {Object.keys(values).length > 0 ? (
              <form className="pricing-from" onSubmit={submitPricingForm}>
                <div className="form-group">
                  <label htmlFor="name">Name of Product</label>
                  <input
                    type="text"
                    value={values.name}
                    onChange={e =>
                      setValues({ ...values, name: e.target.value })
                    }
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
                    onChange={e =>
                      setValues({ ...values, price: e.target.value })
                    }
                    className="form-control"
                    name="price"
                    id="price"
                    placeholder="Price of Product"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="discount">
                    Discount (if any, in percentage)
                  </label>
                  <input
                    type="number"
                    value={values.discount}
                    onChange={e =>
                      setValues({ ...values, discount: e.target.value })
                    }
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
                    onChange={e =>
                      setValues({ ...values, image: e.target.files[0] })
                    }
                    name="image"
                    id="image"
                    className="form-control"
                  />
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    value="Save Changes"
                    className="btn btn-primary float-left"
                  >
                    {isLoading ? (
                      <span>
                        <span
                          className="spinner-border spinner-border-sm mr-3"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </span>
                    ) : (
                      <span>Save</span>
                    )}
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger float-right"
                    data-dismiss="modal"
                  >
                    Discard Changes
                  </button>
                </div>
                {/* {pricingStatus === 'PENDING' && (
                  <button class="btn btn-light ml-2" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span class="sr-only">Loading...</span>
                  </button>
                )} */}
              </form>
            ) : (
              <p>Loading Form</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
