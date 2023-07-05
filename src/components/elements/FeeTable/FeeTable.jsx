import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import { feeItems } from "./service";
import IconItem from "../../UI/IconItem/IconItem";

import { formatNumber } from "../../../utils/utils";

import VisaLogo from "../../../assets/visa-logo.svg";
import MasterCardLogo from "../../../assets/mcard-logo.svg";
import MirLogo from "../../../assets/mir-logo.svg";

import classes from "./FeeTable.module.scss";

export default function FeeTable() {
  const [tableRows, setTableRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTableRows(feeItems);
  }, []);

  const onRowEditComplete = (e) => {
    const _tableRows = [...tableRows];
    const { newData, index } = e;

    _tableRows[index] = newData;

    setTableRows(_tableRows);
  };

  const skeletonTemplate = () => {
    return <Skeleton height="40px"></Skeleton>;
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

  const feePercentageEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(formatNumber(e.target.value))}
      />
    );
  };

  const feePercentageTemplate = (rowData) => {
    return new Intl.NumberFormat("en", {
      style: "percent",
    }).format(rowData.feePercentage / 100);
  };

  const minBetEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(formatNumber(e.target.value))}
      />
    );
  };

  const minBetTemplate = (rowData) => {
    return (<span>{`${rowData.minBet} коп.`}</span>)
  };

  return (
    <div className={classes.table}>
      <DataTable
        value={tableRows}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "20rem" }}
      >
        <Column
          field="paymentSystem"
          header="Платежная система"
          body={isLoading ? skeletonTemplate : paymentSystemTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="feePercentage"
          header="Процент комиссии"
          editor={(options) => feePercentageEditor(options)}
          body={isLoading ? skeletonTemplate : feePercentageTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="minBet"
          header="Минимальная ставка"
          editor={(options) => minBetEditor(options)}
          body={isLoading ? skeletonTemplate : minBetTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          rowEditor
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
          body={isLoading && skeletonTemplate}
        ></Column>
      </DataTable>
    </div>
  );
}
