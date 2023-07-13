import { useState, useEffect } from "react";
import classes from "./Header.module.scss";

import cat from "../../../assets/cat.jpg";
import useAuthStore from "../../../stores/auth";
import { useNavigate } from "react-router-dom";
import { adminPaths } from "../AppRouter/routes";
import InputSwitch from "../../UI/InputSwitch/InputSwitch";

export default function Header({ isDarkTheme, changeTheme }) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const setAuth = useAuthStore((state) => state.setAuth);
  const [menuVisible, setMenuVisible] = useState(false);

  const handleSettingsClick = (e) => {
    setMenuVisible(!menuVisible);
    navigate(adminPaths.PROFILE_SETTINGS);
    e.stopPropagation();
  };

  const handleLogoutClick = (e) => {
    setMenuVisible(!menuVisible);
    e.stopPropagation();
    setAuth(false);
    //! logout();
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
        <InputSwitch isChecked={isDarkTheme} onChange={() => changeTheme()} />
        {/* <InputSwitch /> */}
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
