import { useContext, useEffect } from "react";
import MyButton from "../../Button/Button";
import HeaderSideBar from "../../HeaderSidebar/headersidebar";
import ItemProduct from "../../Itemproduct/itemproduct";
import styles from "./style.module.scss";
import { FiShoppingCart } from "react-icons/fi";
import { SidebarContext } from "../../../contexts/SideBarProvider";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { ListProductCart = [], setIsOpen } = useContext(SidebarContext);
  console.log(ListProductCart);
  const { container, boxBtn, total, cartRong, boxBtnReturnShop } = styles;
  const navigate = useNavigate();
  const handleReturnToShop = () => {
    navigate("/shop");
    setIsOpen(false);
  };
  console.log(ListProductCart);
  const subTotal = ListProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<FiShoppingCart style={{ fontSize: "30px" }} />}
          content={"CART"}
        />
        {ListProductCart.length === 0 ? (
          <div className={cartRong}>
            <div>No product in the cart</div>
            <div className={boxBtnReturnShop}>
              <MyButton
                content={"Return to shop"}
                onClick={handleReturnToShop}
              />
            </div>
          </div>
        ) : (
          <>
            {ListProductCart.map((i, k) => {
              return (
                <ItemProduct
                  key={k}
                  src={i.images[0]}
                  nameProduct={i.name}
                  priceProduct={i.price}
                  sizeProduct={i.size}
                  skuProduct={i.sku}
                  quantity={i.quantity}
                  productId={i.productId}
                  userId={i.userId}
                />
              );
            })}
          </>
        )}
      </div>
      {ListProductCart.length > 0 && (
        <div className={boxBtn}>
          <div className={total}>
            <div>SUBTOTAL: </div>
            <div>{subTotal}</div>
          </div>
          <MyButton content={"VIEW LISTWISH"} />
          <MyButton content={"ADD ALL TO CART"} isPriamry={false} />
        </div>
      )}
    </div>
  );
}

export default Cart;
