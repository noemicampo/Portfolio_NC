import { Fragment } from "react";

import NavBar from "./NavBar";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Header;
