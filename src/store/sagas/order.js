import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../action";

export function* purchaseBurgerSaga(action) {
  yield put(actions.purchaseBurgerStart());
  try {
    const response = yield axios.post("/orders.json", action.orderData);
    yield put(
      actions.purchaseBurgerSuccess(response.data.name, action.orderData)
    );
  } catch (error) {
    yield put(actions.purchaseBurgerFail(error));
  }
}

export function* fetchOrdersSaga(action) {
  yield put(actions.fetchOrderStart());
  console.log(action.userId);
  // const queryParams = "?auth=" + action.token;
  try {
    const response = yield axios.get("/orders.json");
    const fetchedOrders = [];
    for (let key in response.data) {
      fetchedOrders.push({
        ...response.data[key],
        id: key,
      });
    }
    yield put(actions.fetchOrderSuccess(fetchedOrders));
  } catch (error) {
    yield put(actions.fetchOrderFail(error));
  }
}
