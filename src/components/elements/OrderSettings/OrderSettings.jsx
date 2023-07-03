import { useRef } from "react";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import FeeTable from "../FeeTable/FeeTable";

import Title from "../../UI/Title/Title";
import InputSwitch from "../../UI/InputSwitch/InputSwitch";

import classes from "./OrderSettings.module.scss";

export default function OrderSettings() {
  const toast = useRef(null);

  const handleButtonClick = () => {
    toast.current.show({
      severity: "success",
      summary: "Успех",
      detail: "Измененения сохранены",
      life: 2000,
    });
  };

  return (
    <section className={classes.settings}>
      <Title>Настройки заказа</Title>
      <ul className={classes.settings__list}>
        <li>
          <span>Показывать поле "Email" при заказе</span>
          <InputSwitch />
        </li>

        <li>
          <span>Показывать альтернативные способы оплаты</span>
          <InputSwitch />
        </li>

        <li>
          <span>Показывать поле "Email" при заказе</span>
          <InputSwitch />
        </li>
      </ul>

      <div className={classes.settings__table}>
        <h4>Таблица комиссий</h4>
        <FeeTable />
      </div>

      <Toast ref={toast} />
      <Button
        label="Сохранить"
        className="p-button-success"
        onClick={handleButtonClick}
      />
    </section>
  );
}
