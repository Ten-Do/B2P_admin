import React from 'react';

import classes from './IconItem.module.scss';

export default function IconItem({src, title}) {
  return (
    <div className={classes.item}>
        <img className={classes.item__img} src={src} alt="" />
        <h6 className={classes.item__title}>{title}</h6>
    </div>
  )
}
