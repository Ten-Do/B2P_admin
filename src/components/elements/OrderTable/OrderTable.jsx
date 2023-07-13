import React, { useState, useEffect } from "react";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

import { getStatusSeverity, getFeeAmount } from "../../../utils/utils";
import useOrdersStore from "../../../stores/orders";
import VisaLogo from "../../../assets/visa-logo.svg";
import MasterCardLogo from "../../../assets/mcard-logo.svg";
import MirLogo from "../../../assets/mir-logo.svg";
import IconItem from "../../UI/IconItem/IconItem";
import classes from "./OrderTable.module.scss";

export default function BasicFilterDemo() {
  const [filters, setFilters] = useState({});
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const { orders, isLoading, fetchOrders } = useOrdersStore((state) => ({
    orders: state.orders,
    isLoading: state.isLoading,
    fetchOrders: state.fetchOrders,
  }));

  const getOrders = async () => {
    await fetchOrders();
  };

  useEffect(() => {
    getOrders();
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
            placeholder="Поиск..."
            style={{ fontSize: "1.1em" }}
          />
        </span>
      </div>
    );
  };

  const amountTemplate = (rowData) => {
    return <span>{`${rowData.amount} коп.`}</span>;
  };

//   const feeTemplate = (rowData) => {
//     console.log(rowData);
    
//     return new Intl.NumberFormat("en", {
//       style: "percent",
//     }).format();
//   };

  const feeTemplate = (rowData) => {
    return <span>{`${rowData.fee}% (${getFeeAmount(rowData.fee, rowData.amount)} коп.)`}</span>;
  };

  const paymentSystemTemplate = (rowData) => {
    let imgLink;

    if (rowData.paymentSystem === "VISA") {
      imgLink = VisaLogo;
    } else if (rowData.paymentSystem === "MasterCard") {
      imgLink = MasterCardLogo;
    } else {
      imgLink = MirLogo;
    }

    return <IconItem src={imgLink} title={rowData.paymentSystem} />;
  };

  const statusTemplate = (rowData) => {
    return (
      <Tag
        value={rowData.state}
        severity={getStatusSeverity(rowData.state)}
        style={{ borderRadius: "15px", padding: "5px 10px", fontSize: "0.8em" }}
      />
    );
  };

  const header = renderHeader();

  return (
    <div className={classes.table}>
      <DataTable
        value={orders}
        paginator
        paginatorClassName={classes.paginator}
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
        showGridlines
        style={{ fontSize: "1em", minHeight: "724px" }}
        loading={isLoading}
      >
        <Column
          field="id"
          header="ID"
          filterField="id"
          style={{ minWidth: "3.5rem", maxWidth: "3.5rem", fontWeight: 700 }}
          sortable
        />
        <Column
          field="amount"
          header="Amount"
          filterField="amount"
          style={{ minWidth: "5rem" }}
          body={amountTemplate}
          sortable
        />
        <Column
          field="fee"
          header="Fee"
          filterField="fee"
          style={{ minWidth: "3rem" }}
          body={feeTemplate}
          sortable
        />
        <Column
          field="description"
          header="Description"
          filterField="description"
          style={{ minWidth: "12rem" }}
          sortable
        />
        <Column
          header="Payment System"
          filterField="paymentSystem"
          style={{ minWidth: "7rem", maxWidth: "7rem" }}
          body={paymentSystemTemplate}
        />
        <Column
          field="state"
          header="State"
          style={{ minWidth: "5.7rem", maxWidth: "5.7rem" }}
          sortable
          body={statusTemplate}
        />
      </DataTable>
    </div>
  );
}
