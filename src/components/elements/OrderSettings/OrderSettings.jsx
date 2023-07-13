import { useRef, useState, useEffect } from "react";

import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { Skeleton } from "primereact/skeleton";
import useSettingsStore from "../../../stores/settings";
import FeeTable from "../FeeTable/FeeTable";
import Title from "../../UI/Title/Title";
import InputSwitch from "../../UI/InputSwitch/InputSwitch";

import classes from "./OrderSettings.module.scss";

export default function OrderSettings() {
  const { isLoading, settings, fetchSettings, setSettings } = useSettingsStore(
    (state) => ({
      isLoading: state.isLoading,
      settings: state.settings,
      fetchSettings: state.fetchSettings,
      setSettings: state.setSettings,
    })
  );
  const toast = useRef(null);
  const [emailChecked, setEmailChecked] = useState(false);
  const [paymentChecked, setPaymentChecked] = useState(false);
  const [showPaymentSystem, setShowPaymentSystem] = useState(false);

  const [commissions, setCommissions] = useState(settings.commissions);

  const fetchOrderSettings = async () => {
    await fetchSettings();
  };

  const changeCommission = (commission) => {
    const result = settings.commissions.map((item) => {
      if (item.id === commission.id) {
        return commission;
      } else return item;
    });

    setCommissions(result);
  };

  const handleButtonClick = () => {
    setSettings({
      email: emailChecked,
      alternative_payment: paymentChecked,
      commissions: commissions.length ? commissions : settings.commissions,
    });

    toast.current.show({
      severity: "success",
      summary: "Успех",
      detail: "Измененения сохранены",
      life: 2000,
    });
  };

  useEffect(() => {
    fetchOrderSettings();
    setEmailChecked(settings.email);
    setPaymentChecked(settings.alternative_payment);
  }, []);

  return (
    <section className={classes.settings}>
      <Title>Настройки заказа</Title>
      <ul className={classes.settings__list}>
        {isLoading ? (
          <>
            <Skeleton height="31px" width="550px"></Skeleton>
            <Skeleton height="31px" width="550px"></Skeleton>
            <Skeleton height="31px" width="550px"></Skeleton>
          </>
        ) : (
          <>
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
              <span>Показывать логотипы платежных систем</span>
              <InputSwitch
                isChecked={showPaymentSystem}
                onChange={() => setShowPaymentSystem(!showPaymentSystem)}
              />
            </li>
          </>
        )}
      </ul>

      <div className={classes.settings__table}>
        <h4>Таблица комиссий</h4>
        <FeeTable changeCommission={changeCommission} />
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
