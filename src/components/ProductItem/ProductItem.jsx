import styles from "./style.module.scss";
import heart from "@icons/svgs/heartIcon.svg";
import Eye from "@icons/svgs/EyeIcon.svg";
import Bag from "@icons/svgs/BagIcon.svg";
import reload from "@icons/svgs/reloadIcon.svg";
function ProductItem({ name, src, srcPre, price1 }) {
  const { BoxImg, showimgwhenhover, showfnwhenhover, BoxIcon, title, price } =
    styles;
  return (
    <div>
      <div className={BoxImg}>
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
      <div className={title}>{name}</div>
      <div className={price}>{price1}</div>
    </div>
  );
}

export default ProductItem;
