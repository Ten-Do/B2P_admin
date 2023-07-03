import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "primeicons/primeicons.css";
import classes from "./Navigation.module.scss";

export default function Navigation() {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const navigationLinks = [
    { title: "Dashboard", logo: "pi pi-home", path: "/" },
    { title: "Order Settings", logo: "pi pi-cog", path: "/settings" },
  ];

  const handleClick = (path, index) => {
    navigate(path);
    setSelectedIndex(index);
  };

  return (
    <ul className={classes.navigation}>
      {navigationLinks.map((item, index) => (
        <li
          className={
            index === selectedIndex
              ? [classes.link, classes.active].join(" ")
              : classes.link
          }
          onClick={() => handleClick(item.path, index)}
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
