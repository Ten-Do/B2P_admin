import { useState } from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";

import classes from "./Login.module.scss";
import Title from "../../UI/Title/Title";
import useAuthStore from "../../../stores/auth";
import MyInput from "../../UI/MyInput/MyInput";
import { loginValidation, passwordValidation } from "./validations";

export default function Login() {
  const { setAuth, login } = useAuthStore((state) => ({
    setAuth: state.setAuth,
    login: state.login,
  }));
  const { register, handleSubmit, formState:{errors, isValid}} = useForm({mode: "onBlur"});

  
  const onSubmit = (data) => {
    // login(email, password);
    setAuth(true);
  }

  return (
    <div className={classes.wrapper}>
        <div className={classes.container}>
            <h2>Вход</h2>
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <MyInput type="text" placeholder="Email" {...register("login", loginValidation)} label={"Логин"} errors={errors.login ? errors.login.message : ""}/>
                <MyInput type="password" placeholder="Password" {...register("password", passwordValidation)} label={"Пароль"} errors={errors.password ? errors.password.message : ""}/>
                <button type="submit" disabled={!isValid} className={classes.form__btn}>Войти</button>
            </form>
      </div>
    </div>
  );
}
