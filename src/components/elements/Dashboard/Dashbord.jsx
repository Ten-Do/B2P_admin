import React from "react";
import useAuthStore from "../../../stores/auth";
import Title from "../../UI/Title/Title";
import Card from "../Card/Card";
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
      <div className={classes.dashboard__cards}>
        <Card number={"5000$"} label={"Total Revenue"}/>
        <Card number={"73689"} label={"Total Orders"}/>
        <Card number={"259"} label={"Customers"}/>
        <Card number={"5000$"} label={"Total Revenue"}/>
      </div>
      <h5 className={classes['table-title']}>Таблица операций</h5>
      <OrderTable />
    </section>
  );
}
