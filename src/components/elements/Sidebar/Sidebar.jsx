import React, { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  const sidebar = useRef();

  const toggleSidebar = () => {
    sidebar.current.classList.toggle(classes["is-active"]);
  };

//   const checkWindowWidth = () => {
//     if (window.screen.width < 1250) sidebar.current.classList.add(classes["is-active"]);
//   }

//   useEffect(() => {
//     checkWindowWidth()
//   }, [])

  return (
    <aside className={classes.sidebar} ref={sidebar}>
      <div className={classes.btn} onClick={toggleSidebar}></div>
      <div className={classes.sidebar__container}>
        <h2 className={classes.title}>Admin Panel</h2>
        <Navigation />
      </div>
    </aside>
  );
}
