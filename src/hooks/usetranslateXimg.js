import { useEffect, useRef, useState } from "react";
import useScrollTracking from "./useScrollHandling";

const usetranslateX = () => {
    const {scrollDriction,scrollPosition} = useScrollTracking()
  const [translateposition, setTranslateposition] = useState("80");
  const handleTranslateX = () => {
    if (scrollDriction === "down" && scrollPosition >= 2808.800048828125) {
      setTranslateposition(translateposition <= 0 ? 0 : translateposition - 1);
    } else if (scrollDriction === "up") {
      setTranslateposition(
        translateposition >= 80 ? 80 : translateposition + 1
      );
    }
  };
  useEffect(() => {
    handleTranslateX();
  }, [scrollPosition]);
  return {
    translateposition,
  };
};
export default usetranslateX;
