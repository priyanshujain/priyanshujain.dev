import React from "react";
import Icon from "../Icon";

const HomeCard = ({
  onClick = null,
  icon,
  iconClass = "",
  iconContainer = "",
  heading,
  headingClass = "",
  bodyClass = "",
  className = "",
  style,
  children,
}) => {
  return (
    <div className={`${className} flex`} onClick={onClick} style={style}>
      <div className={iconContainer}>
        <Icon name={icon} className={`${iconClass}`} />
      </div>
      <div className={`${bodyClass}`}>
        <h1 className={`${headingClass}`}>{heading}</h1>
        {children}
      </div>
    </div>
  );
};

export default HomeCard;
