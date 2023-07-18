import classes from "./ModalWindow.module.scss";

const ModalWindow = ({title, children, visible, setVisible }) => {
  const rootClasses = [classes["modal"]];
  if (visible) rootClasses.push(classes.active);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
         <div className={classes.content} onClick={e => e.stopPropagation()}>
            <div className={classes.content__header}>
                    <h5>{title}</h5>
                    <i className="pi pi-times" onClick={() => setVisible(false)}></i>
                </div>
            {children}
        </div>
    </div>
  );
};

export default ModalWindow;
