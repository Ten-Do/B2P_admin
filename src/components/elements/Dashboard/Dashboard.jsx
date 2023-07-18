import useAuthStore from "../../../stores/auth";
import Title from "../../UI/Title/Title";
import Card from "../Card/Card";
import OrderTable from "../OrderTable/OrderTable";

import bagIcon from "../../../assets/bag.svg";
import orderIcon from "../../../assets/icon_order.svg";
import deliverIcon from "../../../assets/icon_delivered.svg";
import cancelledIcon from "../../../assets/icon_cancelled.svg";

import classes from "./Dashboard.module.scss";
import { useEffect, useState } from "react";
import $api from "../../../api/api";

export default function Dashbord() {
  const user = useAuthStore((state) => state.user);
  const [totals, setTotals] = useState({});
  useEffect(() => {
    // const fetchTotals = async () => {};
    $api.get("/totals").then(({ data }) => {
      setTotals(data);
    });
  }, []);
  return (
    <section className={classes.dashboard}>
      <Title>Dashboard</Title>
      <h5 className={classes.dashboard__greeting}>
        Hi, {user.name}. Welcome back to Admin Panel!
      </h5>
      <div className={classes.dashboard__cards}>
        <Card
          number={totals.total_revenue}
          label="Total Revenue"
          src={bagIcon}
        />
        <Card
          number={totals.total_orders}
          label="Total Orders"
          src={deliverIcon}
        />
        <Card number={totals.customers} label="Customers" src={orderIcon} />
        <Card
          number={totals.orders_cancelled}
          label="Orders Cancelled"
          src={cancelledIcon}
        />
      </div>
      <h5 className={classes["table-title"]}>Таблица операций</h5>
      <OrderTable />
    </section>
  );
}
