import * as Types from "./actionTypes";

export const purchaseBurgerSuccess = (id, orderData) => {
  return {
    type: Types.PURCHASE_BURGER_SUCCESS,
    id: id,
    orderData: orderData,
  };
};

export const purchaseBurgerFail = () => {
  return {
    type: Types.PURCHASE_BURGER_FAIL,
  };
};

export const purchaseBurgerServer = (order, token) => {
  return {
    type: Types.PURCHASE_BURGER,
    orderData: order,
    token: token,
  };
};

export const purchaseRedirect = () => {
  return {
    type: Types.PURCHASE_REDIRECT,
  };
};

export const purchaseBurgerStart = () => {
  return {
    type: Types.PURCHASE_BURGER_START,
  };
};

export const fetchOrderStart = () => {
  return {
    type: Types.FETCH_ORDER_START,
  };
};

export const fetchOrderSuccess = (orders) => {
  return {
    type: Types.FETCH_ORDER_SUCCESS,
    orders: orders,
  };
};

export const fetchOrderFail = (error) => {
  return {
    type: Types.FETCH_ORDER_FAIL,
    error: error,
  };
};

export const fetchOrders = (token, userId) => {
  return {
    type: Types.FETCH_ORDERS,
    userId: userId,
    token: token,
  };
};
export const deleteOrder = (id) => {
  return (dispatch) => {
    dispatch(deleteOrderStart());
    dispatch(deleteOrderFail());

    // axios
    //   .get("/orders.json")
    //   .then((res) => {
    //     const fetchedOrders = [];
    //     for (let key in res.data) {
    //       fetchedOrders.push({
    //         ...res.data[key],
    //         id: key,
    //       });
    //     }
    //     dispatch(fetchOrderSuccess(fetchedOrders));
    //   })
    //   .catch((err) => {
    //     dispatch(fetchOrderFail(err));
    //   });
  };
};
export const deleteOrderStart = () => {
  return {
    type: Types.DELETE_ORDER_START,
  };
};
export const deleteOrderSuccess = (orders) => {
  return {
    type: Types.DELETE_ORDER_SUCCESS,
    orders: orders,
  };
};

export const deleteOrderFail = () => {
  return {
    type: Types.DELETE_ORDER_FAIL,
  };
};
