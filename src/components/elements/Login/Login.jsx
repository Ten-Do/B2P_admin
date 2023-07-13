import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ProgressSpinner } from "primereact/progressspinner";
import classes from "./Login.module.scss";
import useAuthStore from "../../../stores/auth";
import MyInput from "../../UI/MyInput/MyInput";
import {
  loginValidation,
  passwordValidation,
} from "../../../utils/validations";

export default function Login() {
  const { setAuth, login } = useAuthStore((state) => ({
    setAuth: state.setAuth,
    login: state.login,
  }));
  const {
    register,
    handleSubmit,
    watch,
    reset,
    resetField,
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm({ mode: "onTouched" });
  
  const watchFields = watch(["login", "password"]);
  
  const onSubmit = async (data) => {
    // login(email, password)
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    await sleep(2000);

    if (data.login === "admin@mail.ru" && data.password === "admin999") {
        setAuth(true);
        reset();
    } else {
      resetField("password");
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h2>Вход</h2>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={classes.form__error}>
            {!isSubmitted || "Логин или пароль введены неверно"}
          </p>
          <MyInput
            type="text"
            placeholder="Email"
            {...register("login", loginValidation)}
            label={"Логин"}
            errors={errors.login?.message || ""}
          />
          <MyInput
            type="password"
            placeholder="Password"
            {...register("password", passwordValidation)}
            label={"Пароль"}
            errors={errors.password?.message || ""}
          />
          <button
            type="submit"
            disabled={!isValid || watchFields.includes("") || watchFields.includes(undefined)}
            className={classes.form__btn}
          >
            {isSubmitting ? (
              <ProgressSpinner
                style={{ width: "23px", height: "23px", position: "absolute", top: "27%", left: "43%"}}
                strokeWidth="8"
                animationDuration=".8s"
              />
            ) : (
              "Войти"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
