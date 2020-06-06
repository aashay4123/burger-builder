import React, { useEffect } from "react";
import { connect } from "react-redux";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import * as actions from "../../store/action";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = (props) => {
  useEffect((props) => {
    props.onFetch(props.token, props.userId);
  }, []);
  let orders = <Spinner />;
  if (!props.loading) {
    orders = props.order.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
        clicked={() => props.onDelete(order.id)}
      />
    ));
  }
  return <div>{orders}</div>;
};

const mapStatetoProps = (state) => {
  return {
    order: state.order.order,
    purchased: state.order.purchased,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.id,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onFetch: (token, userId) => dispatch(actions.fetchOrders(token, userId)),
    onDelete: (id) => dispatch(actions.deleteOrder(id)),
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withErrorHandler(Orders, axios));
