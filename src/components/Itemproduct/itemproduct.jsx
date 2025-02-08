import styles from "./style.module.scss";
import { IoIosClose } from "react-icons/io";
function ItemProduct() {
  const { container, boxContent, title, price, boxImg, boxIcon,size,id } = styles;
  return (
    <div className={container}>
      <div className={boxImg}>
        <img
          src="https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410037tlorbe3.jpg"
          alt=""
        />
      </div>
      <div className={boxContent}>
        <div className={title}>klfasnfasfadasdsasdasdasda</div>
        <div className={size}>Size:M</div>
        <div className={price}>1 x 43444</div>
        <div className={id}>SKU: 12349</div>
      </div>
      <div className={boxIcon}>
        <IoIosClose style={{ fontSize: "29px" }} />
      </div>
    </div>
  );
}

export default ItemProduct;
