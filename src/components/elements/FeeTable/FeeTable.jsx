import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import IconItem from "../../UI/IconItem/IconItem";
import { formatNumber } from "../../../utils/utils";

import useCommissionsStore from "../../../stores/commissions";

import classes from "./FeeTable.module.scss";

export default function FeeTable({ setNewCommissions }) {
  const [tableRows, setTableRows] = useState([]);
  const { isLoading, commissions } = useCommissionsStore((state) => ({
    isLoading: state.isLoading,
    commissions: state.commissions,
  }));

  useEffect(() => {
    setTableRows(commissions);
  }, [commissions]);

  const onRowEditComplete = (e) => {
    const _tableRows = [...tableRows];
    const { newData, index } = e;

    _tableRows[index] = newData;

    setNewCommissions(_tableRows);
    setTableRows(_tableRows);
  };

  const paymentSystemTemplate = ({ payment_system }) => {
    return (
      <IconItem
        src={
          process.env.PUBLIC_URL +
          "/payment_system_logos/" +
          payment_system +
          ".svg"
        }
        title={payment_system}
      />
    );
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
    return <span>{`${rowData.min_bet ? rowData.min_bet : "0"} коп.`}</span>;
  };

  return (
    <div className={classes.table}>
      <DataTable
        value={tableRows}
        editMode="row"
        dataKey="id"
        onRowEditComplete={onRowEditComplete}
        tableStyle={{ minWidth: "20rem" }}
        style={{ fontSize: "1em", minHeight: "248px" }}
        loading={isLoading}
      >
        <Column
          field="payment_system"
          header="Платежная система"
          body={paymentSystemTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="fee"
          header="Процент комиссии"
          editor={(options) => feePercentageEditor(options)}
          body={feeTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="min_bet"
          header="Минимальная ставка"
          editor={(options) => minBetEditor(options)}
          body={minBetTemplate}
          style={{ width: "20%" }}
        ></Column>
        <Column
          rowEditor
          headerStyle={{ width: "5%", minWidth: "2rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
      </DataTable>
    </div>
  );
}
