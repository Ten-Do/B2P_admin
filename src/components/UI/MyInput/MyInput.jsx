import React from "react";
import classes from "./MyInput.module.scss";

const MyInput = React.forwardRef(({errors, label, ...props}, ref) => (
    <>
      <label className={classes.label}>{label}
        <input {...props} ref={ref} className={classes.input} />
      </label>
      <div className={classes.error}>
        <span>{errors}</span>
      </div>
    </>
  ))


  export default MyInput;