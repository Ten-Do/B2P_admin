import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "primeicons/primeicons.css";
import classes from "./Navigation.module.scss";
import { adminPaths } from "../AppRouter/routes";

export default function Navigation() {
  const navigate = useNavigate();

  const navigationLinks = [
    { title: "Dashboard", logo: "pi pi-home", path: adminPaths.DASHBOARD },
    { title: "Order Settings", logo: "pi pi-cog", path: adminPaths.SETTINGS },
  ];

  return (
    <ul className={classes.navigation}>
      {navigationLinks.map((item, index) => (
        <li
          className={
            item.path === window.location.pathname
              ? [classes.link, classes.active].join(" ")
              : classes.link
          }
          onClick={() => navigate(item.path)}
          key={index}
        >
          <span></span>
          <div className={classes.link__box}>
            <i className={item.logo}></i>
            {item.title}
          </div>
        </li>
      ))}
    </ul>
  );
}
