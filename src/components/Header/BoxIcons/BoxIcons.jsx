import styles from "../style.module.scss";
import fb from "@icons/svgs/faIcon.svg";
import ins from "@icons/svgs/insIcon.svg";
import ytb from "@icons/svgs/youtbIcon.svg";

import reload from "@icons/svgs/reloadIcon.svg";
import heart from "@icons/svgs/heartIcon.svg";
import shopping from "@icons/svgs/shoppingIcon.svg";
function MyBoxIcons({ type, href }) {
  const { BoxIcons } = styles;
  const handleIcons = (type) => {
    switch (type) {
      case "fb":
        return fb;
      case "ins":
        return ins;
      case "ytb":
        return ytb;
        case "reload":
          return reload;
        case "heart":
          return heart;
        case "sp":
          return shopping;
    }
  };
  return (
    <div className={BoxIcons}>
      <img src={handleIcons(type)} alt={type} />
    </div>
  );
}

export default MyBoxIcons;
