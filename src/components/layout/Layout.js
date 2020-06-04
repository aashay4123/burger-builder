import React, { Fragment, useState } from "react";
import classes from "./layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";
import * as actions from "../../store/action";

const Layout = (props) => {
  const [ShowSideDrawer, setShowSideDrawer] = useState(false);

  const SideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };
  const SideDrawerToggleHandler = () => {
    setShowSideDrawer(!ShowSideDrawer);
  };
  return (
    <Fragment>
      <Toolbar
        isAuth={props.isAuthenticated}
        drawerToggleClicked={SideDrawerToggleHandler}
      />
      <SideDrawer
        isAuth={props.isAuthenticated}
        open={ShowSideDrawer}
        closed={SideDrawerClosedHandler}
      />
      <main className={classes.Margin}> {props.children} </main>
    </Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    onOrderBurger: (orderdata, token) =>
      dispatch(actions.purchaseBurgerServer(orderdata, token)),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Layout);
