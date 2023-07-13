import { useState } from "react";

import classes from "./InputSwitch.module.scss";

export default function InputSwitch({ isChecked, ...props}) {
//   const [checked, setChecked] = useState(isChecked);
    // console.log(isChecked);

//   const handleChange = (e) => {
//     setIsChecked(!isChecked)
//   };

  return (
    <label className={classes.switch}>
      <input {...props} type="checkbox" checked={isChecked}/>
      <span className={[classes.slider, classes.round].join(" ")}></span>
    </label>
  );
}
