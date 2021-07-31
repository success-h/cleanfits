import React, { useState, useContext, useEffect } from "react";
import TopHeader from "./TopHeader";
import PricingForm from "./PricingForm";
//import axios from 'axios'
import { AppContext } from "../../Context";
//import {Link} from 'react-router-dom'
import "./index.css";
import SortablePricingTable from "./SortablePricingTable";
import Modal from "./Modal";
import OrderModal from "./OrderModal";
import Orders from "./Orders";

const AdminHome = () => {
  const [isMenuShown, setMenuShown] = useState(true);
  const [view, setView] = useState("pricing");
  const [currentItem, setCurrentItem] = useState({});
  const {
    state: { pricing, orders }
  } = useContext(AppContext);

  useEffect(() => {
    setView(localStorage.getItem("view"));
  }, []);

  useEffect(() => {
    localStorage.setItem("view", view);
  }, [view]);

  const editPricing = id => {
    let item = pricing.filter(i => i._id === id);
    setCurrentItem({ ...item[0] });
  };

  const deletePricing = id => {
    console.log(id);
  };

  const viewMore = id => {
    console.log(id);
  };

  const markAsDelivered = id => {
    console.log(id);
  };

  return (
    <div className="admin-home">
      <Modal currentItem={currentItem} />
      <OrderModal />
      <TopHeader
        isMenuShown={isMenuShown}
        setMenuShown={setMenuShown}
        view={view}
        setView={setView}
      />

      <main style={{ paddingTop: "100px" }}>
        <div className="pt-3">
          {view === "pricing" ? (
            <div className="container">
              <h1 className="bd-title">Pricing</h1>
              <PricingForm />
              <SortablePricingTable
                editPricing={editPricing}
                deletePricing={deletePricing}
              />
            </div>
          ) : (
            <div className="container">
              <h1 className="bd-title">Orders</h1>
              <Orders
                orders={orders}
                viewMore={viewMore}
                markAsDelivered={markAsDelivered}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminHome;
