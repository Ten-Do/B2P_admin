import React from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import classes from "./Login.module.scss";
import Title from "../../UI/Title/Title";
import useAuthStore from "../../../stores/auth";

export default function Login() {
  const setAuth = useAuthStore((state) => state.setAuth);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Title>Вход</Title>
      <div className={classes.form__inputs}>
        <div className={classes.form__input}>
          <label htmlFor="username">Имя</label>
          <InputText id="username" type="text" minLength={3} required/>
        </div>
        <div className={classes.form__input}>
          <label htmlFor="password">Пароль</label>
          <InputText id="password" type="password" minLength={5} required/>
        </div>
      </div>
      <Button label="Login" icon="pi pi-user" style={{width: "100%", maxWidth: "200px"}}></Button>
    </form>
  );
}
