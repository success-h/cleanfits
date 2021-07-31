import React, { useContext, useState } from "react";
import { AppContext } from "../../Context";

const SortablePricingTable = ({ editPricing, deletePricing }) => {
  const {
    state: { pricing }
  } = useContext(AppContext);
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);

  return (
    <div
      className="sortable-pricing-table my-5 px-1"
      style={{
        height: "400px",
        overflowY: "scroll"
      }}
    >
      <button
        onClick={() => {
          setScrollPosition(0);
          window.scrollTo(0, scrollPosition);
        }}
        type="button"
        className="btn btn-primary float-right"
      >
        Add New
        <i
          className={
            pricing.length > 0
              ? "fas fa-angle-up pl-1"
              : "fas fa-spinner fa-spin pl-1"
          }
        />
      </button>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            {/* <th scope="col">Discount</th> */}
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {pricing.length > 0 &&
            pricing.map(item => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                {/* <td>{item.discount}%</td> */}
                <td>
                  {item.status === "published" ? (
                    <span className="text-success">Pushlished</span>
                  ) : (
                    <span className="text-warning">Draft</span>
                  )}
                </td>
                <td>
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
                      <button
                        onClick={() => editPricing(item._id)}
                        className="dropdown-item btn btn-light"
                        data-toggle="modal"
                        data-target="#editPricingModal"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deletePricing(item._id)}
                        className="dropdown-item btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortablePricingTable;
