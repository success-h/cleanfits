const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRICING_REQUEST_STARTED":
      return { ...state, pricingStatus: "PENDING" };
    case "ADD_PRICING_REQUEST_SUCCESS":
      return { ...state, pricingStatus: "RESOLVED" };
    case "ADD_PRICING_REQUEST_ERROR":
      return { ...state, pricingStatus: "REJECTED" };
    case "ADD_PRICING":
      return Object.assign({}, state, {
        pricing: [...state.pricing, action.payload]
      });
    case "SET_PRICING":
      return Object.assign({}, state, {
        pricing: [...state.pricing, ...action.payload]
      });
    case "SET_ORDERS":
      return Object.assign({}, state, {
        orders: [...state.orders, ...action.payload]
      });
    case "ADD_TO_CART":
      return Object.assign({}, state, {
        cart: [...state.cart, action.payload]
      });

    case "ADD_ITEMS_TO_CART":
      return Object.assign({}, state, {
        cart: [...action.payload]
      });
    case "REMOVE_FROM_CART":
      return Object.assign({}, state, {
        cart: state.cart.filter(item => item._id !== action.payload)
      });
    default:
      return state;
  }
};

export default reducer;
