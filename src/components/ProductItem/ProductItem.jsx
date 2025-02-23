import styles from "./style.module.scss";
import heart from "@icons/svgs/heartIcon.svg";
import Eye from "@icons/svgs/EyeIcon.svg";
import Bag from "@icons/svgs/BagIcon.svg";
import reload from "@icons/svgs/reloadIcon.svg";
import { useContext, useEffect, useState } from "react";
import { OurshopContext } from "../../contexts/OurshopProvider";
import cls from "classnames";
import MyButton from "../Button/Button";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { SidebarContext } from "../../contexts/SideBarProvider";
import { addProductToCard, getCard } from "../../apis/cardService";
import LoadingTextCommon from "../../LoadingTextCommon/loadingTextCommon";
import { useNavigate } from "react-router-dom";
function ProductItem({
  name,
  src,
  srcPre,
  price1,
  details,
  isHomePages = true,
  isShowGrid,
}) {
  const {
    BoxImg,
    showimgwhenhover,
    showfnwhenhover,
    BoxIcon,
    title,
    price,
    boxSize,
    sizeItem,
    containerText,
    boxBtn,
    containerBox,
    container,
    containerText1,
    BoxImg1,
    activeSize,
    clearBtn,
  } = styles;
  const size = details.size;

  const [choseSize, setChoseSize] = useState("");
  const handleGetChoseSize = (size) => {
    setChoseSize(size);
  };
  const {
    setIsOpen,
    setType,
    setLoading,

    handleListProductCart,
    getProduct,

    setProduct,
    setDetailProduct,
  } = useContext(SidebarContext);

  const userId = Cookies.get("id");
  const navigate = useNavigate();
  const handleGetToCard = () => {
    if (!userId) {
      setIsOpen(true);
      setType("login");
      toast.warning("Vui Lòng Đăng Nhập Để Sử Dụng Card");
      return;
    }
    if (!choseSize) {
      toast.warning("Vui lòng chọn size");
      return;
    }
    const data = {
      userId,
      productId: details._id,
      quantity: 1,
      size: choseSize,
    };
    setLoading(true);
    addProductToCard(data)
      .then((res) => {
        setType("sp");
        setIsOpen(true);
        setLoading(false);
        handleListProductCart(userId, "cart");
        toast.success("Add Product to cart success");
      })
      .catch((errr) => {
        toast.error("Add Product to cart failed!dấdasa");
        setLoading(false);
      });
  };
  const handleGetDetails = () => {
    setIsOpen(true);
    setType("detail");
    setDetailProduct(details);
  };
  const handleTargetCart = (details) => {
    setProduct(details);
    const path = `/product/${details._id}`;
    navigate(path);
  };
  return (
    <div className={!isShowGrid && !isHomePages ? container : ""}>
      <div
        className={cls(BoxImg, {
          [BoxImg1]: !isShowGrid && !isHomePages,
        })}
      >
        <div
          style={{ cursor: "pointer" }}
          onClick={() => handleTargetCart(details)}
        >
          <img src={src} alt={name} />
          <img src={srcPre} alt={name} className={showimgwhenhover} />
        </div>
        <div className={showfnwhenhover}>
          <div className={BoxIcon}>
            <img src={Bag} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={heart} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={reload} alt="ss" />
          </div>
          <div className={BoxIcon}>
            <img src={Eye} alt="ss" onClick={handleGetDetails} />
          </div>
        </div>
      </div>
      <div className={!isShowGrid && !isHomePages ? containerBox : ""}>
        {!isHomePages && (
          <div className={boxSize}>
            {size.map((i, k) => {
              return (
                <div
                  key={k}
                  className={cls(sizeItem, {
                    [activeSize]: choseSize === i.name,
                  })}
                  onClick={() => handleGetChoseSize(i.name)}
                >
                  {i.name}
                </div>
              );
            })}
          </div>
        )}
        {choseSize != "" && (
          <div onClick={() => setChoseSize("")} className={clearBtn}>
            clear
          </div>
        )}
        <div
          className={cls({
            [!isShowGrid && !isHomePages ? containerText1 : containerText]:
              !isHomePages,
          })}
        >
          <div className={title}>{name}</div>
          <div className={price}>${price1}</div>
        </div>
        {!isHomePages && (
          <div className={boxBtn}>
            <MyButton
              content={`ADD TO CARD`} //isLoading ? <LoadingTextCommon /> :
              onClick={handleGetToCard}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductItem;
