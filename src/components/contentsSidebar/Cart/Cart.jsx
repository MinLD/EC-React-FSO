import MyButton from "../../Button/Button";
import HeaderSideBar from "../../HeaderSidebar/headersidebar";
import ItemProduct from "../../Itemproduct/itemproduct";
import styles from "./style.module.scss";
import { FiShoppingCart } from "react-icons/fi";
function Cart() {
  const { container, boxBtn ,total} = styles;
  return (
    <div className={container}>
      <div>
      <HeaderSideBar
        icon={<FiShoppingCart style={{ fontSize: "30px" }} />}
        content={"CART"}
      />
      <ItemProduct/>
      </div>
      
      <div className={boxBtn}>
        <div className={total}>
          <div>SUBTOTAL: </div>
          <div>$599</div>
        </div>
        <MyButton content={"VIEW LISTWISH"}/> 
        <MyButton content={"ADD ALL TO CART"} isPriamry={false}/> 
      </div>
    </div>
  );
}

export default Cart;
