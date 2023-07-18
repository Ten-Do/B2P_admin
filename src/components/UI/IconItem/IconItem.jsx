import classes from "./IconItem.module.scss";

export default function IconItem({ src, title }) {
  return (
    <div className={classes.item}>
      <img className={classes.item__img} src={src} title={title} alt="Avatar" />
    </div>
  );
}
