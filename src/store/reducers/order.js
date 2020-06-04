import * as Types from "../action/actionTypes";

const initialState = {
  order: [],
  loading: false,
  purchased: false,
  orderfetched: false,
};
const reducer = (state = initialState, action) => {
  const orderData = {
    ...action.orderData,
    id: action.id,
  };

  switch (action.type) {
    case Types.PURCHASE_BURGER_SUCCESS:
      return {
        ...state,
        loading: false,
        purchased: true,
        order: state.order.concat(orderData),
      };
    case Types.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case Types.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case Types.PURCHASE_REDIRECT:
      return {
        ...state,
        purchased: false,
      };
    case Types.FETCH_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case Types.FETCH_ORDER_SUCCESS:
      return {
        ...state,
        order: action.orders,
        loading: false,
      };
    case Types.FETCH_ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };
    case Types.DELETE_ORDER_START:
      return {
        ...state,
        loading: true,
      };
    case Types.DELETE_ORDER_SUCCESS:
      return {
        ...state,
        order: action.orders,
        loading: false,
      };
    case Types.DELETE_ORDER_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
export default reducer;
