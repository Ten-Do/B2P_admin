import classes from './Card.module.scss';

export default function Card({number, label, src}) {
  return (
    <div className={classes.card}>
        <div className={classes.card__block}>
            <div className={classes.card__img}><img src={src} alt={"Bag"}/></div>
            <div className={classes.card__column}>
                <span className={classes.card__number}>{number}</span>
                <span className={classes.card__label}>{label}</span>
            </div>
        </div>
    </div>
  )
}
