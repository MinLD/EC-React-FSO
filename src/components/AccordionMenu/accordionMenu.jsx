import cls from "classnames";
import styles from "./style.module.scss";
import { useState } from "react";
import { RiArrowDownWideLine } from "react-icons/ri";
import { TfiLayoutLineSolid } from "react-icons/tfi";
function AccordionMenu({ title, contents, onClick, Id, isValueId }) {
  const {
    container,
    boxTitle,
    boxContent,
    activeTitle,
    activeContent,
    boderBottom,
  } = styles;

  const isSelected = isValueId === Id;
  return (
    <div className={container}>
      <div
        className={cls(boxTitle, { [activeTitle]: isSelected })}
        onClick={onClick}
      >
        {isSelected ? (
          <TfiLayoutLineSolid style={{ fontSize: "15px" }} />
        ) : (
          <RiArrowDownWideLine style={{ fontSize: "15px" }} />
        )}
        <span>{title}</span>
      </div>
      <div
        className={cls(boxContent, {
          [boderBottom]: isSelected,
          [activeContent]: isSelected,
        })}
      >
        <div>{contents}</div>
      </div>
    </div>
  );
}

export default AccordionMenu;
