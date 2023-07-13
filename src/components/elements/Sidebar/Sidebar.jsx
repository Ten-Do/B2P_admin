import { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  const sidebar = useRef();

  const toggleSidebar = () => {
    if (sidebar.current.classList.contains(classes["is-active"]) && window.innerWidth < 1350) {
        document.body.style.overflowY = "hidden";
    } else if (!sidebar.current.classList.contains(classes["is-active"])){
        document.body.style.overflowY = "scroll";
    }
    sidebar.current.classList.toggle(classes["is-active"]);
  };

  const clickHandle = (e) => {
    if (window.innerWidth < 1350) {
      toggleSidebar();
    }
  };

  return (
    <aside
      className={
        window.innerWidth < 1350
          ? [classes.sidebar, classes["is-active"]].join(" ")
          : classes.sidebar
      }
      ref={sidebar}
      onClick={toggleSidebar}
    >
      <div className={classes.btn}></div>
      <div
        className={classes.sidebar__container}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={classes.title}>Admin Panel</h2>
        <div className={classes.nav} onClick={clickHandle}>
          <Navigation />
        </div>
      </div>
    </aside>
  );
}
