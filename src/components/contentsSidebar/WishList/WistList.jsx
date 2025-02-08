import MyButton from "../../Button/Button";
import HeaderSideBar from "../../HeaderSidebar/headersidebar";
import ItemProduct from "../../Itemproduct/itemproduct";
import styles from "./style.module.scss";
import { CiHeart } from "react-icons/ci";
function WistList() {
  const { container, boxBtn } = styles;
  return (
    <div className={container}>
      <div>
      <HeaderSideBar
        icon={<CiHeart style={{ fontSize: "30px" }} />}
        content={"WITH LIST"}
      />
      <ItemProduct/>
      </div>
      <div className={boxBtn}>
        <MyButton content={"VIEW LISTWISH"}/> 
        <MyButton content={"ADD ALL TO CART"} isPriamry={false}/> 
      </div>
    </div>
  );
}

export default WistList;
