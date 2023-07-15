import { useRef, useState, useEffect } from "react";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import useSettingsStore from "../../../stores/settings";
import FeeTable from "../FeeTable/FeeTable";
import Title from "../../UI/Title/Title";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import useCommissionsStore from "../../../stores/commissions";
import SettingsRows from "../SettingsRows/SettingsRows";

import classes from "./OrderSettings.module.scss";

export default function OrderSettings() {
  const { fetchSettings, setSettings } = useSettingsStore((state) => ({
    fetchSettings: state.fetchSettings,
    setSettings: state.setSettings,
  }));
  const { fetchCommissions, setCommissions } = useCommissionsStore((state) => ({
    fetchCommissions: state.fetchCommissions,
    setCommissions: state.setCommissions,
  }));

  const toast = useRef(null);

  const [newCommissions, setNewCommissions] = useState([]);
  const [newSettings, setNewSettings] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const fetchOrderSettings = async () => {
    await fetchSettings();
    await fetchCommissions();
  };

  const handleButtonClick = () => {
    setModalVisible(false);
    if (newSettings) {
        setSettings(newSettings);
    }
    
    if (newCommissions.length) {
        setCommissions(newCommissions);
    }

    toast.current.show({
      severity: "success",
      summary: "Успех",
      detail: "Измененения сохранены",
      life: 1000,
    });
  };

  useEffect(() => {
    fetchOrderSettings();
  }, []);

  return (
    <section className={classes.settings}>
      <Title>Настройки заказа</Title>
      <SettingsRows setNewSettings={setNewSettings} />
      <div className={classes.settings__table}>
        <h4>Таблица комиссий</h4>
        <FeeTable setNewCommissions={setNewCommissions} />
      </div>

      <Toast ref={toast} />
      <Button
        label="Сохранить"
        className="p-button-success"
        onClick={() => setModalVisible(true)}
      />
      <ModalWindow visible={modalVisible} setVisible={setModalVisible}>
        <div className={classes.modal} onClick={e => e.stopPropagation()}>
            <div className={classes.modal__header}>
                <h5>Подтвердить изменения</h5>
                <i className="pi pi-times" onClick={() => setModalVisible(false)}></i>
            </div>
            <p className={classes.modal__body}>Настройки заказа были изменены. Вы уверены, что хотите применить их?</p>
            <div className={classes.modal__buttons}>
                <button onClick={() => setModalVisible(false)}>Отменить</button>
                <button onClick={handleButtonClick}>Сохранить</button>
            </div>
        </div>
      </ModalWindow>
    </section>
  );
}
