import React, { useRef, useEffect } from "react";
import Navigation from "../Navigation/Navigation";

import classes from "./Sidebar.module.scss";

export default function Sidebar() {
  const sidebar = useRef();

  const toggleSidebar = () => {
    console.log("da");
    
    sidebar.current.classList.toggle(classes["is-active"]);
  };

//   const checkWindowWidth = () => {
//     if (window.screen.width < 1250) sidebar.current.classList.add(classes["is-active"]);
//   }

//   useEffect(() => {
//     checkWindowWidth()
//   }, [])

  const clickHandle = (e) => {
    if (window.innerWidth <= 1250) {
        toggleSidebar();
    }
  }

  return (
    <aside className={classes.sidebar} ref={sidebar} onClick={toggleSidebar}>
      <div className={classes.btn}></div>
      <div className={classes.sidebar__container} onClick={e => e.stopPropagation()}>
        <h2 className={classes.title}>Admin Panel</h2>
        <div className={classes.nav} onClick={clickHandle}>
            <Navigation />
        </div>
       
      </div>
    </aside>
  );
}
