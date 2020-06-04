import * as Types from "./actionTypes";

export const addIngredient = (name) => {
  return { type: Types.ADD_INGREDIENT, ingredientName: name };
};

export const removeIngredient = (name) => {
  return { type: Types.REMOVE_INGREDIENT, ingredientName: name };
};

export const setIngredient = (ingredients) => {
  return {
    type: Types.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};
export const setIngredientFailed = () => {
  return {
    type: Types.SET_STATE_ERROR,
  };
};
export const initIngredients = (dispatch) => {
  return {
    type: Types.INIT_INGREDIENTS,
  };
};
