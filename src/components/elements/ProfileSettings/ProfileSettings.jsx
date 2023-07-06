import { useState, useRef } from "react";
import Title from "../../UI/Title/Title";
import classes from "./ProfileSettings.module.scss";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import useAuthStore from "../../../stores/auth";

export default function ProfileSettings() {
  const toast = useRef();
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const { currentName, changeUserName } = useAuthStore((state) => ({
    currentName: state.user.name,
    changeUserName: state.changeUserName,
  }));

  const handleButtonClick = () => {
    if (userName) {
      changeUserName(userName);
      toast.current.show({
        severity: "success",
        summary: "Успех",
        detail: "Имя изменено",
        life: 1200,
      });
    } else if (password) {
      // changeUserName(userName);
      toast.current.show({
        severity: "success",
        summary: "Успех",
        detail: "Пароль изменён",
        life: 1200,
      });
    }

    setPassword("");
    setUserName("");
  };

  return (
    <div className={classes.settings}>
      <Title>Настройки профиля</Title>
      <ul className={classes.settings__list}>
        <li>
          <span>Сменить Имя</span>
          <InputText
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={currentName}
          />
        </li>

        <li>
          <span>Сменить пароль</span>
          <Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            toggleMask
            promptLabel="Введите пароль"
            weakLabel="Слабый"
            mediumLabel="Средний"
            strongLabel="Сильный"
            placeholder="*****"
          />
        </li>
      </ul>
      <Toast ref={toast} />
      <Button
        label="Сохранить"
        className="p-button-success"
        onClick={handleButtonClick}
      />
    </div>
  );
}
