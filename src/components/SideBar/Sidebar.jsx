import { useContext } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { SidebarContext } from "../../contexts/SideBarProvider";
import { IoIosClose } from "react-icons/io";
import Login from "../contentsSidebar/Login/login";
import Compare from "../contentsSidebar/Compare/compare";
import WistList from "../contentsSidebar/WishList/WistList";
import Cart from "../contentsSidebar/Cart/Cart";

function Sidebar() {
  const { container, layout, slidesidebar, sidebar, boxIcon } = styles;
  const { isOpen, setIsOpen, istype } = useContext(SidebarContext);
  const handleRender = () => {
    switch (istype) {
      case "reload":
        return <Compare/>;
        break;
      case "heart":
        return <WistList/>;
        break;
      case "sp":
        return <Cart/>;
        break;
        case "login":
          return  <Login />;
          break;

      default:
        return <Login />;
        break;
    }
  };
  return (
    <div className={classNames(container)}>
      <div
        className={classNames({
          [layout]: isOpen,
        })}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={classNames(sidebar, { [slidesidebar]: isOpen })}>
        {isOpen && (
          <div className={boxIcon} onClick={() => setIsOpen(!isOpen)}>
            <IoIosClose />
          </div>
        )}
        {handleRender()}
      </div>
    </div>
  );
}

export default Sidebar;
