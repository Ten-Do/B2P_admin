import React from "react";
import { useNavigate } from "react-router-dom";

import "primeicons/primeicons.css";
import classes from "./Navigation.module.scss";

export default function Navigation() {
  const navigate = useNavigate();

  const navigationLinks = [
    { title: "Dashboard", logo: "pi pi-home", path: "/" },
    { title: "Order Settings", logo: "pi pi-cog", path: "/settings" },
  ];

  return (
    <ul className={classes.navigation}>
      {navigationLinks.map((item, index) => (
        <li
          className={classes.link}
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
