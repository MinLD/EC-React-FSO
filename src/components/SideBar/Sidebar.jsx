import { useContext } from "react";
import styles from "./style.module.scss";
import classNames from "classnames";
import { SidebarContext } from "../../contexts/SideBarProvider";
import { IoIosClose } from "react-icons/io";
function Sidebar() {
  const { container, layout, slidesidebar, sidebar, boxIcon } = styles;
  const { isOpen, setIsOpen } = useContext(SidebarContext);
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
          <div className={boxIcon} onClick={()=> setIsOpen(!isOpen)}>
            <IoIosClose />
          </div>
        )}
        Sidebar
      </div>
    </div>
  );
}

export default Sidebar;
