import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Skeleton } from "primereact/skeleton";

import { getStatusSeverity } from "../../../utils/utils";
import { orderList } from "./service";
import VisaLogo from "../../../assets/visa-logo.svg";
import MasterCardLogo from "../../../assets/mcard-logo.svg";
import MirLogo from "../../../assets/mir-logo.svg";
import IconItem from "../../UI/IconItem/IconItem";
import classes from "./OrderTable.module.scss";

export default function BasicFilterDemo() {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    setOrders(orderList);
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    });
  }, []);

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    const _filters = { ...filters };

    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };

  // Templates
  const skeletonTemplate = () => {
    return <Skeleton height="60px"></Skeleton>;
  };

  const amountTemplate = (rowData) => {
    return (<span>{`${rowData.amount} коп.`}</span>)
  };

  const feeTemplate = (rowData) => {
    return new Intl.NumberFormat("en", {
      style: "percent",
    }).format(rowData.fee / 100);
  };

  const paymentSystemTemplate = (rowData) => {
    const imgLink =
      rowData.paymentSystem === "VISA"
        ? VisaLogo
        : rowData.paymentSystem === "MasterCard"
        ? MasterCardLogo
        : MirLogo;

    return <IconItem src={imgLink} title={rowData.paymentSystem} />;
  };

  const statusTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.state}
        severity={getStatusSeverity(rowData.state)}
        style={{ borderRadius: "15px", padding: "5px 10px" }}
      />
    );
  };

  const header = renderHeader();

  return (
    <div className={classes.table}>
      <DataTable
        value={orders}
        paginator
        rows={8}
        dataKey="id"
        filters={filters}
        globalFilterFields={[
          "id",
          "amount",
          "fee",
          "description",
          "paymentSystem",
          "state",
        ]}
        header={header}
        emptyMessage="No orders found."
        scrollable
        showGridlines
        stateStorage="session"
        stateKey="dt-state-demo-local"
      >
        <Column
          field="id"
          header="ID"
          filterField="id"
          style={{ minWidth: "3rem", fontWeight: 700 }}
          sortable
          body={isLoading && skeletonTemplate}
        />
        <Column
          field="amount"
          header="Amount"
          filterField="amount"
          style={{ minWidth: "5rem" }}
          body={isLoading ? skeletonTemplate : amountTemplate}
          sortable
        />
        <Column
          field="fee"
          header="Fee"
          filterField="fee"
          style={{ minWidth: "3rem" }}
          body={isLoading ? skeletonTemplate : feeTemplate}
          sortable
        />
        <Column
          field="description"
          header="Description"
          filterField="description"
          style={{ minWidth: "12rem" }}
          sortable
          body={isLoading && skeletonTemplate}
        />
        <Column
          header="Payment System"
          filterField="paymentSystem"
          style={{ minWidth: "8rem" }}
          body={isLoading ? skeletonTemplate : paymentSystemTemplate}
        />
        <Column
          field="state"
          header="State"
          style={{ minWidth: "8rem" }}
          sortable
          body={isLoading ? skeletonTemplate : statusTemplate}
        />
      </DataTable>
    </div>
  );
}
