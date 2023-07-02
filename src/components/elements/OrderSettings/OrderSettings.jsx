import React, { useState } from "react";
import Title from "../../UI/Title/Title";

import InputSwitch from "../../UI/InputSwitch_old/InputSwitch";

import classes from "./OrderSettings.module.scss";

export default function OrderSettings() {
  const [checked, setChecked] = useState(false);
  console.log(checked);

  return (
    <section className={classes.settings}>
      <Title value={"Настройки заказа"} />
      <ul className={classes.settings__list}>
        <li>
          <span>Показывать поле "Email" при заказе</span>
          <InputSwitch />
        </li>

        <li>
          <span>Показывать альтернативные способы</span>
          <InputSwitch />
        </li>

        <li>
          <span>Показывать поле "Email" при заказе</span>
          <InputSwitch />
        </li>
      </ul>
    </section>
  );
}
