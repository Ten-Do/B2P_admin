import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Skeleton } from "primereact/skeleton";
import IconItem from "../../UI/IconItem/IconItem";
import { formatNumber } from "../../../utils/utils";

import VisaLogo from "../../../assets/visa-logo.svg";
import MasterCardLogo from "../../../assets/mcard-logo.svg";
import MirLogo from "../../../assets/mir-logo.svg";

import classes from "./FeeTable.module.scss";
import useSettingsStore from "../../../stores/settings";

export default function FeeTable() {
  const [tableRows, setTableRows] = useState([]);
  const { isLoading, commissions } = useSettingsStore((state) => ({
    isLoading: state.isLoading,
    commissions: state.settings.commissions,
  }));

  useEffect(() => {
    setTableRows(commissions);
  }, [commissions]);

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
    let imgLink;

    if (rowData.payment_system === "VISA") {
      imgLink = VisaLogo;
    } else if (rowData.payment_system === "MasterCard") {
      imgLink = MasterCardLogo;
    } else {
      imgLink = MirLogo;
    }

    return <IconItem src={imgLink} title={rowData.payment_system} />;
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

  const feeTemplate = (rowData) => {
    return new Intl.NumberFormat("en", {
      style: "percent",
    }).format(rowData.fee / 100);
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
    return <span>{`${rowData.min_bet} коп.`}</span>;
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
          field="payment_system"
          header="Платежная система"
          body={isLoading ? skeletonTemplate : paymentSystemTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="fee"
          header="Процент комиссии"
          editor={(options) => feePercentageEditor(options)}
          body={isLoading ? skeletonTemplate : feeTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="min_bet"
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
