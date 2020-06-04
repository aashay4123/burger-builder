import * as Types from "../action/actionTypes";

const INGREDIENTS_PRICES = {
  salad: 30,
  cheese: 20,
  meat: 50,
  bacon: 70,
};

const initialState = {
  ingredients: null,
  totalPrice: 50,
  error: false,
  building: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD_INGREDIENT:
      return {
        ...state,
        building: true,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:
          state.totalPrice + INGREDIENTS_PRICES[action.ingredientName],
      };
    case Types.REMOVE_INGREDIENT:
      return {
        ...state,
        building: true,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice:
          state.totalPrice - INGREDIENTS_PRICES[action.ingredientName],
      };
    case Types.SET_INGREDIENTS:
      return {
        ...state,
        building: false,
        ingredients: action.ingredients,
        error: false,
        totalPrice: 50,
      };
    case Types.SET_STATE_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
