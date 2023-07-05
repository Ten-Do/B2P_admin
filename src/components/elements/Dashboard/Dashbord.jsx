import React from "react";
import useAuthStore from "../../../stores/auth";
import Title from "../../UI/Title/Title";
import OrderTable from "../OrderTable/OrderTable";

import classes from "./Dashboard.module.scss";

export default function Dashbord() {
  const user = useAuthStore((state) => state.user);

  return (
    <section className={classes.dashboard}>
      <Title>Dashboard</Title>
      <h5 className={classes.dashboard__greeting}>
        Hi, {user.name}. Welcome back to Admin Panel!
      </h5>
      <OrderTable />
    </section>
  );
}
