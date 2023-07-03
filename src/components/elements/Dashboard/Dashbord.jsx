import React from "react";
import Title from "../../UI/Title/Title";
import OrderTable from "../OrderTable/OrderTable";

import classes from "./Dashboard.module.scss";

export default function Dashbord() {
  return (
    <section className={classes.dashboard}>
      <Title>{"Dashboard"}</Title>
      <h5 className={classes.dashboard__greeting}>
        Hi, {"Arthur"}. Welcome back to Admin Panel!
      </h5>
      <OrderTable />
    </section>
  );
}
