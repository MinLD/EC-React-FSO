import { useContext } from "react";
import MyFooter from "../../components/Footer/Footer";
import MyHeader from "../../components/Header/Header";
import MyLayout from "../../components/Layout/Layout";
import Content from "./component/contents/content";
import Step from "./component/steps/steps";
import styles from "./style.module.scss";
import { SidebarContext } from "../../contexts/SideBarProvider";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import MyButton from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { container, containerIsEmptyCart, boxSteps } = styles;
  const { ListProductCart } = useContext(SidebarContext);
  const navigate = useNavigate();
  const handleReturnToShop = () => {
    navigate("/shop");
  };
  return (
    <>
      <MyHeader />
      <div className={container}>
        {ListProductCart.length > 0 ? (
          <>
            <div className={boxSteps}>
              <Step />

              <div>
                You are out of time! Checkout now to avoid losing your order!
              </div>
            </div>

            <MyLayout>
              <Content />
            </MyLayout>
          </>
        ) : (
          <>
            <div className={containerIsEmptyCart}>
              <h1>Your cart is empty</h1>
              <div>
                <MdOutlineLocalGroceryStore style={{ fontSize: "60px" }} />
              </div>
              <p>Please add items to your cart to proceed with checkout.</p>
              <MyButton
                content={"Continue Store"}
                style={{ width: "200px" }}
                onClick={handleReturnToShop}
              />
            </div>
          </>
        )}
      </div>
      <MyFooter />
    </>
  );
}

export default Cart;
