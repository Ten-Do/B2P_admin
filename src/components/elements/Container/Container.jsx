import React from "react";

import classes from "./Container.module.scss";

export default function Container({ children, maxWidth = '100%' }) {
  const containerStyles = { maxWidth: maxWidth };

  return (
    <div className={classes.container} style={containerStyles}>
      {children}
    </div>
  );
}
