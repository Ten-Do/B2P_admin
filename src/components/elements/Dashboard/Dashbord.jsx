import React from "react";
import Title from "../../UI/Title/Title";

import classes from "./Dashboard.module.scss";

export default function Dashbord() {
  return (
    <section className={classes.dashboard}>
      <Title value={"Dashboard"} />
      <h5 className={classes.dashboard__greeting}>
        Hi, {"Arthur"}. Welcome back to Admin Panel!
      </h5>
    </section>
  );
}
