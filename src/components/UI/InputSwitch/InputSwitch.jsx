import React, { useState } from "react";

import classes from "./InputSwitch.module.scss";

export default function InputSwitch({ isChecked }) {
  const [checked, setChecked] = useState(isChecked);
    // console.log(isChecked);

  const handleChange = (e) => {
    setChecked(!checked);
  };

  return (
    <label className={classes.switch}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={[classes.slider, classes.round].join(" ")}></span>
    </label>
  );
}
