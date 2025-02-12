import styles from "../style.module.scss";
import fb from "@icons/svgs/faIcon.svg";
import ins from "@icons/svgs/insIcon.svg";
import ytb from "@icons/svgs/youtbIcon.svg";

import reload from "@icons/svgs/reloadIcon.svg";
import heart from "@icons/svgs/heartIcon.svg";
import shopping from "@icons/svgs/shoppingIcon.svg";
import { useContext } from "react";
import { SidebarContext } from "../../../contexts/SideBarProvider";

function MyBoxIcons({ type, href }) {
  const { ListProductCart } = useContext(SidebarContext);
  const { BoxIcons, quacity } = styles;
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
      {type === "sp" && <div className={quacity}>{ListProductCart.length}</div>}
    </div>
  );
}

export default MyBoxIcons;
