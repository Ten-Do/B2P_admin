import { useState } from "react";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import classes from "./Login.module.scss";
import Title from "../../UI/Title/Title";
import useAuthStore from "../../../stores/auth";

export default function Login() {
  const {setAuth, login} = useAuthStore((state) => ({setAuth : state.setAuth, login: state.login}));
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuth(true);
    // login(email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Title>Вход</Title>
        <div className={classes.form__inputs}>
          <div className={classes.form__input}>
            <label htmlFor="username">Имя</label>
            <InputText
              value={email}
              onChange={handleChangeEmail}
              id="username"
              type="text"
              minLength={3}
              required
            />
          </div>
          <div className={classes.form__input}>
            <label htmlFor="password">Пароль</label>
            <InputText
              value={password}
              onChange={handleChangePassword}
              id="password"
              type="password"
              minLength={5}
              required
            />
          </div>
        </div>
        <Button
          label="Login"
          icon="pi pi-user"
          style={{ width: "100%", maxWidth: "200px" }}
        ></Button>
      </form>
    </div>
  );
}
