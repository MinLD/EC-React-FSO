import Steper from "./steper";
import styles from "../../style.module.scss";
import cls from "classnames";
import { useState } from "react";
function Step() {
  const { lend, containerStep } = styles;
  const data = [
    {
      number: 1,
      content: "SHOPPING CART",
    },
    {
      number: 2,
      content: "CHECKOUT",
    },
    {
      number: 3,
      content: "ODER STATUS",
    },
  ];
  const [isStep, setIsStep] = useState(0);
  const handleClick = (index) => {
    setIsStep(index);
  };
  return (
    <div className={containerStep}>
      {data.map((item, index) => {
        return (
          <>
            <Steper
              number={item.number}
              content={item.content}
              key={index}
              isDisabled={isStep !== index}
              index={index}
              onClick={() => handleClick(index)}
            />
            {index < data.length - 1 && <div className={lend} />}
          </>
        );
      })}
    </div>
  );
}

export default Step;
