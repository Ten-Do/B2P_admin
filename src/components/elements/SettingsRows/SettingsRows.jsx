import { useState, useEffect } from "react";
import InputSwitch from "../../UI/InputSwitch/InputSwitch";
import { Skeleton } from "primereact/skeleton";
import useSettingsStore from "../../../stores/settings";

import classes from "./SettingsRows.module.scss";
import DropZone from "../../UI/DropZone/DropZone";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";

export default function SettingsRows({ setNewSettings }) {
  const { isLoading, settings } = useSettingsStore((state) => ({
    isLoading: state.isLoading,
    settings: state.settings,
  }));

  const [modalVisible, setModalVisible] = useState(false);

  const [emailChecked, setEmailChecked] = useState(false);
  const [paymentChecked, setPaymentChecked] = useState(false);
  const [showPaymentSystem, setShowPaymentSystem] = useState(false);

  useEffect(() => {
    setEmailChecked(settings.email);
    setPaymentChecked(settings.alternative_payment);
  }, []);

  useEffect(() => {
    setNewSettings({
      email: emailChecked,
      alternative_payment: paymentChecked,
    });
  }, [emailChecked, paymentChecked]);

  if (isLoading)
    return (
      <ul className={classes.settings__list}>
        <Skeleton height="31px" width="550px"></Skeleton>
        <Skeleton height="31px" width="550px"></Skeleton>
        <Skeleton height="31px" width="550px"></Skeleton>
      </ul>
    );

  return (
    <ul className={classes.settings__list}>
      <li>
        <span>Показывать поле "Email" при заказе</span>
        <InputSwitch
          isChecked={emailChecked}
          onChange={() => setEmailChecked(!emailChecked)}
        />
      </li>

      <li>
        <span>Показывать альтернативные способы оплаты</span>
        <InputSwitch
          isChecked={paymentChecked}
          onChange={() => setPaymentChecked(!paymentChecked)}
        />
      </li>

      <li>
        <span>Показывать логотип магазина</span>
        <InputSwitch
          isChecked={showPaymentSystem}
          onChange={() => setShowPaymentSystem(!showPaymentSystem)}
        />
      </li>
      <li>
        <div>
          <button
            className={classes.settings__btn}
            onClick={() => setModalVisible(true)}
          >
            <i className={"pi pi-download"} />
            <span>Загрузить логотип</span>
          </button>
        </div>
      </li>

      <ModalWindow title={"Выбор изображения"} visible={modalVisible} setVisible={setModalVisible}>
        <DropZone />
      </ModalWindow>
    </ul>
  );
}
