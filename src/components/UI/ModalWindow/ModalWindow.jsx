import classes from "./ModalWindow.module.scss";

const ModalWindow = ({ children, visible, setVisible }) => {
  const rootClasses = [classes["modal"]];
  if (visible) rootClasses.push(classes.active);

  return (
    <div className={rootClasses.join(" ")} onClick={() => setVisible(false)}>
      {children}
    </div>
  );
};

export default ModalWindow;
