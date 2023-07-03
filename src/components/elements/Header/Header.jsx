import React from "react";
import classes from "./Header.module.scss";

import cat from "../../../assets/cat.jpg";

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.profile}>
        <h6 className={classes.profile__username}>
          Hello, <span>{"Arthur"}</span>{" "}
        </h6>
        <div className={classes.profile__img}>
          <img src={cat} alt="Profile logo" />
        </div>
      </div>
    </header>
  );
}
