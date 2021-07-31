import React, { useMemo } from "react";
import reducer from "../Reducer";
import axios from "axios";
import { pathInEnv } from "../utils";
const AppContext = React.createContext();

function AppProvider({ children }) {
  const initialState = useMemo(() => {
    return {
      pricing: [],
      orders: [],
      pricingStatus: null,
      cart: [],
      name: "francis"
    };
  });

  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };

  React.useEffect(() => {
    axios({
      url: pathInEnv("/api/v1/pricing"),
      method: "GET"
    })
      .then(response => {
        console.log(response.data);
        dispatch({ type: "SET_PRICING", payload: response.data.pricingList });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    axios({
      url: pathInEnv("/api/v1/orders"),
      method: "GET"
    })
      .then(response => {
        console.log(response.data);
        dispatch({ type: "SET_ORDERS", payload: response.data.orders });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

const AppConsumer = AppContext.Consumer;

export { AppContext, AppProvider, AppConsumer };
