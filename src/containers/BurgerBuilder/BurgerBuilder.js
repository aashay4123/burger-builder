import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../withErrorHandler/withErrorHandler";
import * as burgerBuilderActions from "../../store/action";
import axios from "../../axios-orders";
// import { Redirect } from "react-router-dom";

export const BurgerBuilder = (props) => {
  const [purchasing, setpurchasing] = useState(false);
  useEffect(() => {
    props.oninitIngs();
  }, []);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igkey) => {
        return ingredients[igkey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const purchaseHandler = () => {
    if (props.isAuth) {
      setpurchasing(true);
    } else {
      props.onAuthRedirect("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseCancelHandler = () => {
    setpurchasing(false);
  };

  const purchaseContinueHandler = () => {
    props.oninitPurchase();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.ings,
  };

  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let ordersummary = null;
  let burger = props.error ? (
    <p>Error ingredients canot be loaded</p>
  ) : (
    <Spinner />
  );
  if (props.ings) {
    burger = (
      <Fragment>
        <Burger ingredients={props.ings} />
        <BuildControls
          ingredientAdded={props.onaddIng}
          ingredientRemoved={props.onremIng}
          disabled={disabledInfo}
          price={props.price}
          ordered={purchaseHandler}
          purchasable={updatePurchaseState(props.ings)}
          isAuth={props.isAuth}
        />
      </Fragment>
    );
    ordersummary = (
      <OrderSummary
        ingredients={props.ings}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
        price={props.price}
      />
    );
  }
  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {ordersummary}
      </Modal>
      {burger}
    </Fragment>
  );
};
const mapStatetoProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuth: state.auth.token !== null,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    onaddIng: (ingName) =>
      dispatch(burgerBuilderActions.addIngredient(ingName)),
    onremIng: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredient(ingName)),
    oninitIngs: () => dispatch(burgerBuilderActions.initIngredients()),
    oninitPurchase: () => dispatch(burgerBuilderActions.purchaseRedirect()),
    onAuthRedirect: (path) =>
      dispatch(burgerBuilderActions.setAuthRedirectPath(path)),
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(withErrorHandler(BurgerBuilder, axios));
