import React from "react";

import classes from "./InputSwitchTheme.module.scss";

export default function InputSwitchTheme({ isChecked, ...props }) {
  return (
    <div>
      <input
        {...props}
        checked={isChecked}
        type="checkbox"
        className={classes.checkbox}
        id="chk"
      />
      <label className={classes.label} htmlFor="chk">
        <i className={[classes.moon, "pi pi-moon"].join(" ")}></i>
        <i className={[classes.sun, "pi pi-sun"].join(" ")}></i>
        <div className={classes.ball}></div>
      </label>
    </div>
  );
}
