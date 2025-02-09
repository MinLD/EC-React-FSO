import styles from "./style.module.scss";
import heart from "@icons/svgs/heartIcon.svg";
import Eye from "@icons/svgs/EyeIcon.svg";
import Bag from "@icons/svgs/BagIcon.svg";
import reload from "@icons/svgs/reloadIcon.svg";
import { useContext, useState } from "react";
import { OurshopContext } from "../../contexts/OurshopProvider";
import cls from "classnames";
import MyButton from "../Button/Button";
function ProductItem({
  name,
  src,
  srcPre,
  price1,
  details,
  isHomePages = true,
  isShowGrid,
}) {
  const {
    BoxImg,
    showimgwhenhover,
    showfnwhenhover,
    BoxIcon,
    title,
    price,
    boxSize,
    sizeItem,
    containerText,
    boxBtn,
    containerBox,
    container,
    containerText1,
    BoxImg1,
  } = styles;
  const size = details.size;

  console.log(isShowGrid);

  return (
    <div className={!isShowGrid && !isHomePages ? container : ""}>
      <div
        className={cls(BoxImg, {
          [BoxImg1]: !isShowGrid && !isHomePages,
        })}
      >
        <img src={src} alt={name} />
        <img src={srcPre} alt={name} className={showimgwhenhover} />
        <div className={showfnwhenhover}>
          <div className={BoxIcon}>
            <img src={Bag} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={heart} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={reload} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={Eye} alt="ss" />
          </div>
        </div>
      </div>
      <div className={!isShowGrid && !isHomePages ? containerBox : ""}>
        {!isHomePages && (
          <div className={boxSize}>
            {size.map((i, k) => {
              return (
                <div key={k} className={sizeItem}>
                  {i.name}
                </div>
              );
            })}
          </div>
        )}
        <div
          className={cls({
            [!isShowGrid && !isHomePages ? containerText1 : containerText]: !isHomePages,
          })}
        >
          <div className={title}>{name}</div>
          <div className={price}>${price1}</div>
        </div>
        {!isHomePages && (
          <div className={boxBtn}>
            <MyButton content={"ADD TO CARD"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
