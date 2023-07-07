import React from 'react';

import classes from './Card.module.scss';
import bagIcon from "../../../assets/bag.svg";

export default function Card({number, label}) {
  return (
    <div className={classes.card}>
        <div className={classes.card__block}>
            <div className={classes.card__img}><img src={bagIcon} alt={"Bag"}/></div>
            <div className={classes.card__column}>
                <span className={classes.card__number}>{number}</span>
                <span className={classes.card__label}>{label}</span>
            </div>
        </div>
    </div>
  )
}
