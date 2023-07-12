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
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const watchFields = watch(["login", "password"]);
  console.log(isSubmitted);

  const onSubmit = (data) => {
    // login(email, password);
    if (data.login && data.password) {
      setAuth(true);
    }
  };

  useEffect(() => {
    reset();
  }, [isSubmitted]);

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
            disabled={!isValid || watchFields.includes("") || isSubmitted}
            className={classes.form__btn}
          >
            {isSubmitting ? (
              <ProgressSpinner
                style={{ width: "10px", height: "10px" }}
                strokeWidth="8"
                fill="var(--surface-ground)"
                animationDuration=".5s"
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
