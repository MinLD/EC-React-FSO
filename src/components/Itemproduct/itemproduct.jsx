import { useContext, useState } from "react";
import { deleteItem } from "../../apis/cardService";
import styles from "./style.module.scss";
import { IoIosClose } from "react-icons/io";
import { SidebarContext } from "../../contexts/SideBarProvider";
import LoadingTextCommon from "../../LoadingTextCommon/loadingTextCommon";
function ItemProduct({
  src,
  nameProduct,
  priceProduct,
  sizeProduct,
  skuProduct,
  quantity,
  productId,
  userId,
}) {
  const {
    container,
    boxContent,
    title,
    price,
    boxImg,
    boxIcon,
    size,
    id,
    overLoading,
  } = styles;
  const { handleListProductCart } = useContext(SidebarContext);
  const [isLoading, setLoading] = useState(false);
  const handleDeleteItem = () => {
    setLoading(true);
    const data = {
      productId,
      userId,
    };

    deleteItem(data)
      .then((res) => {
        setLoading(false);
        handleListProductCart(userId, "cart");
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  
  return (
    <>
      <div className={container}>
        <div className={boxImg}>
          <img src={src} alt="" />
        </div>
        <div className={boxContent}>
          <div className={title}>{nameProduct}</div>
          <div className={size}>Size: {sizeProduct}</div>
          <div className={price}>
            {quantity} x {priceProduct}
          </div>
          <div className={id}>SKU: {skuProduct}</div>
        </div>
        <div className={boxIcon}>
          <IoIosClose style={{ fontSize: "29px" }} onClick={handleDeleteItem} />
        </div>
        {isLoading && (
          <div className={overLoading}>
            <LoadingTextCommon />
          </div>
        )}
      </div>
    </>
  );
}

export default ItemProduct;
