import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";

import cat from "../../../assets/cat.jpg";
import useAuthStore from "../../../stores/auth";

export default function Header() {
  const user = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSettingsClick = (e) => {
    e.stopPropagation();
  };

  const handleLogoutClick = (e) => {
    e.stopPropagation();
    setAuth(false);
  };

  const handleProfileClick = (e) => {
    setMenuVisible(!menuVisible);
    e.stopPropagation();
  };

  const handleDocumentClick = () => {
    setMenuVisible(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <header className={classes.header}>
      <div className={classes.profile}>
        <h6 className={classes.profile__username}>
          Hello, <span>{user.name}</span>{" "}
        </h6>
        <div className={classes.profile__img} onClick={handleProfileClick}>
          <img src={cat} alt="Profile logo" />
        </div>

        <ul
          className={
            menuVisible
              ? [classes.menu, classes.visible].join(" ")
              : classes.menu
          }
        >
          <li onClick={handleSettingsClick}>
            <i className="pi pi-cog"></i>
            <span>Настройки</span>{" "}
          </li>
          <li onClick={handleLogoutClick}>
            <i className="pi pi-sign-out"></i>
            <span>Выйти</span>{" "}
          </li>
        </ul>
      </div>
    </header>
  );
}
