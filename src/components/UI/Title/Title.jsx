import classes from './Title.module.scss';

export default function Title({children}) {
  return (
    <h3 className={classes.title}>{children}</h3>
  )
}





