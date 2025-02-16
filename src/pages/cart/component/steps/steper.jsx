import { useState } from "react";
import styles from "../../style.module.scss";
import cls from "classnames";
function Steper({ number, content, isDisabled, index, onClick }) {
  const {
    containerSteper,
    boxNumber,
    boxText,
    isDisabledNumber,
    isDisabledText,
  } = styles;

  return (
    <div className={containerSteper} onClick={onClick}>
      <div className={cls(boxNumber, { [isDisabledNumber]: isDisabled })}>
        {number}
      </div>
      <div className={cls(boxText, { [isDisabledText]: isDisabled })}>
        {content}
      </div>
    </div>
  );
}

export default Steper;
