import { useContext, useState } from "react";
import styles from "../style.module.scss";
import { SidebarContext } from "../../../contexts/SideBarProvider";
import { StoreContext } from "../../../contexts/storeProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function MyMenu({ content, href }) {
  const { menuContent, subMenu } = styles;
  const { setIsOpen, setType, userId } = useContext(SidebarContext);
  const { userInfo, handleLogout } = useContext(StoreContext);
  const [isShow, setshow] = useState(false);
  const navigate = useNavigate();

  const handleTongle = () => {
    if (content === "Sign In" && !userId) {
      setIsOpen(true);
      setType("login");
    }
    if (content === "Our Shop") {
      navigate("/shop");
    }
  };
  const handleRenderText = (content) => {
    if (content === "Sign In" && userInfo) {
      return `Hello ${userInfo?.username}`;
    } else {
      return content;
    }
  };
  const handleHover = (content) => {
    if (content === "Sign In" && userInfo) {
      setshow(true);
    }
  };

  return (
    <div
      className={menuContent}
      onClick={() => handleTongle()}
      onMouseEnter={() => handleHover(content)}
    >
      {handleRenderText(content)}
      {isShow && (
        <div
          className={subMenu}
          onMouseLeave={() => setshow(false)}
          onClick={handleLogout}
        >
          LOG OUT
        </div>
      )}
    </div>
  );
}
export default MyMenu;
