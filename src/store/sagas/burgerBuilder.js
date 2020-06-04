import { put } from "redux-saga/effects";

import axios from "../../axios-orders";
import * as actions from "../action";

export function* initIngredientsSaga(action) {
  try {
    const response = yield axios.get(
      "https://burger-4123.firebaseio.com/ingredients.json"
    );
    yield put(actions.setIngredient(response.data));
  } catch (error) {
    yield put(actions.setIngredientFailed());
  }
}
