import { useState, useRef } from "react";
import Title from "../../UI/Title/Title";
import classes from "./ProfileSettings.module.scss";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import useAuthStore from "../../../stores/auth";
import { useForm } from "react-hook-form";
import { formatAmount } from "../../../utils/utils";
import MyInput from "../../UI/MyInput/MyInput";
import {
  loginValidation,
  passwordValidation,
} from "../../../utils/validations";

export default function ProfileSettings() {
  const toast = useRef();
  const { user, setEmail, setPassword } = useAuthStore((state) => ({
    user: state.user,
    setEmail: state.setEmail,
    setPassword: state.setPassword,
  }));

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    let detail;
    if (data.login && data.password) {
      setEmail(data.login);
      setPassword(data.password);
      detail = "Email и пароль изменены";
    } else if (data.login) {
      setEmail(data.login);
      detail = "Email изменён";
    } else if (data.password) {
      setPassword(data.password);
      detail = "Пароль изменён";
    } else {
      detail = "Без изменений";
    }

    toast.current.show({
      severity: "success",
      summary: "Успех",
      detail: detail,
      life: 1100,
    });
    reset();
  };

  return (
    <div className={classes.settings}>
      <Title>Настройки профиля</Title>
      <form
        className={classes.settings__list}
        onSubmit={handleSubmit(onSubmit)}
      >
        <MyInput
          type="text"
          placeholder={user.email}
          {...register("login", loginValidation)}
          label={"Логин"}
          errors={errors.login?.message || ""}
        />
        <MyInput
          type="password"
          placeholder="********"
          {...register("password", passwordValidation)}
          label={"Пароль"}
          errors={errors.password?.message || ""}
        />
        <button disabled={!isValid}>Сохранить</button>
      </form>
      <Toast ref={toast} />
    </div>
  );
}
