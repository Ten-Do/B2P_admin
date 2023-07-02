import React from "react";
import Navigation from "../Navigation/Navigation";

import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <h2 className={classes.title}>Admin Panel</h2>
      <Navigation />
    </div>
  );
}
