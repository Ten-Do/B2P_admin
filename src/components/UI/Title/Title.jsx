import React from 'react';

import classes from './Title.module.scss';

export default function Title({value}) {
  return (
    <h3 className={classes.title}>{value}</h3>
  )
}





