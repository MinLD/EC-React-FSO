import { useContext, useState } from "react";
import SliderCommon from "../../SliderCommon/SliderCommon";
import { SidebarContext } from "../../../contexts/SideBarProvider";
import styles from "./style.module.scss";
import SelectBox from "../../../pages/Ourshop/component/select";
import MyButton from "../../Button/Button";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { addProductToCard } from "../../../apis/cardService";
import cls from "classnames";
import LoadingTextCommon from "../../../LoadingTextCommon/loadingTextCommon";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { toast } from "react-toastify";
function DetailsProduct() {
  const {
    isDetailProduct,
    setDetailProduct,
    userId,
    setType,
    setIsOpen,
    handleListProductCart,
    setLoading,
    isLoading,
  } = useContext(SidebarContext);
  const {
    containerDetails,
    containerBodyDetails,
    boxSize,
    boxSelect,
    size,

    boxBtn,
    boxOr,
    Line,
    text,
    boxIcon,
    isActive,
    selectBox,
  } = styles;

  const option = [
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "10" },
    { label: "11" },
    { label: "12" },
  ];
  const [isSelectSize, setSelectSize] = useState("");
  const [isQuantity, setQuantity] = useState(1);
  console.log(isDetailProduct);
  const handlegetQuantity = (value) => {
    setQuantity(value);
  };
  const handleGetSize = (size) => {
    setSelectSize(size);
    console.log(isSelectSize);
  };
  const handlePostCart = () => {
    if (!userId) {
      setIsOpen(false);
      toast.warning("Please login first to add to cart");
      setType("log in");
      setIsOpen(true);

      return;
    }
    if (isSelectSize === "") {
      toast.warning("Please chose size to add to cart");
      return;
    }
    const data = {
      userId,
      productId: isDetailProduct._id,
      quantity: isQuantity,
      size: isSelectSize,
      isMultiple: false,
    };
    setIsOpen(false);
    setLoading(true);
    addProductToCard(data)
      .then((res) => {
        setType("sp");
        setIsOpen(true);
        handleListProductCart(userId, "cart");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={containerDetails}>
      <SliderCommon data={isDetailProduct.images} />
      <div className={containerBodyDetails}>
        <div style={{ fontSize: "25px" }}>
          <b>{isDetailProduct.name}</b>
        </div>
        <div style={{ fontSize: "20px", color: "#6666" }}>
          <b>${isDetailProduct.price}</b>
        </div>
        <div>{isDetailProduct.description}</div>
        <div>
          <div>Size : </div>
          <div className={cls(boxSize)}>
            {isDetailProduct.size.map((i, k) => {
              return (
                <div
                  key={k}
                  className={cls(size, { [isActive]: isSelectSize === i.name })}
                  onClick={() => handleGetSize(i.name)}
                >
                  {i.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className={boxSelect}>
          <SelectBox
            option={option}
            defaultValue={isQuantity}
            getvalue={(e) => handlegetQuantity(e)}
            className={selectBox}
          />

          <div className={boxBtn}>
            <MyButton
              content={
                <div>
                  {isLoading ? (
                    <LoadingTextCommon />
                  ) : (
                    <div
                      className={boxIcon}
                      style={{ justifyContent: "center" }}
                    >
                      <MdOutlineLocalGroceryStore
                        style={{ fontSize: "20px" }}
                      />
                      ADD TO CART
                    </div>
                  )}
                </div>
              }
              onClick={handlePostCart}
            />
          </div>
        </div>
        <div className={boxOr}>
          <div className={Line} />
          <div>OR</div>
          <div className={Line} />
        </div>
        <div>
          <MyButton
            content={
              <div className={boxIcon} style={{ justifyContent: "center" }}>
                <MdOutlineLocalGroceryStore style={{ fontSize: "20px" }} />
                SELECT OPTION
              </div>
            }
          />
        </div>
        <div>
          <div className={boxIcon}>
            <TfiReload /> Add to compare
          </div>
          <div className={boxIcon}>
            <CiHeart /> Add to wishlist
          </div>
          <div className={text}>
            <b>SKU :</b> 123
          </div>
          <div className={text}>
            <b>Category: </b>
            <span>Pullovers</span>
          </div>
          <div className={text}>
            <b> Estimated delivery: </b>
            <span>3 - 5 days </span>
          </div>
          <div className={text}>
            <b>Share: </b>
            <FaXTwitter style={{ fontSize: "12px" }} />{" "}
            <FaFacebookF style={{ fontSize: "12px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
