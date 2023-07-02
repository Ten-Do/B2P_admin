import React from 'react';

import classes from './InputSwitch.module.scss';

export default function InputSwitch() {
  return (
    <label className={classes.switch}>
        <input type="checkbox"/>
        <span className={[classes.slider, classes.round].join(' ')}></span>
    </label>
  )
}
