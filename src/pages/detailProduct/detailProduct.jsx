import MyButton from "../../components/Button/Button";
import MyFooter from "../../components/Footer/Footer";
import MyHeader from "../../components/Header/Header";
import MyLayout from "../../components/Layout/Layout";
import styles from "./style.module.scss";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";

import PaymentList from "../../components/ListPayments/ListPayment";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import AccordionMenu from "../../components/AccordionMenu/accordionMenu";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { SidebarContext } from "../../contexts/SideBarProvider";
import AdditionalInfo from "./component/additionalInfo";
import Review from "./component/reviews";
import SliderCommon from "../../components/SliderCommon/SliderCommon";
import ReactImageMagnifier from "simple-image-magnifier/react";
import cls from "classnames";
import { getDetailProduct, getRelatedProduct } from "../../apis/apiProduct";
import { addProductToCard } from "../../apis/cardService";
function DetailProduct() {
  const {
    container,
    boxHeader,
    containerContents,
    boxImg,
    boxContent,
    boxSize,
    size,
    boxAdd,
    boxCount,
    boxBtn,
    boxIcon,
    boxPayment,
    boxText,
    boxAccordionMenu,
    boxBackShop,
    containerFooter,
    boxOr,
    boxbtnBuy,
    isActive,
  } = styles;

  const product = [
    {
      name: "Additional",
      price: 150,
      image:
        "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410037tlorbe3.jpg",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
    {
      name: "Additional",
      price: 150,
      image:
        "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410037tlorbe3.jpg",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
    {
      name: "Additional",
      price: 150,
      image:
        "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410037tlorbe3.jpg",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
    {
      name: "Additional",
      price: 150,
      image:
        "https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410037tlorbe3.jpg",
      size: [{ name: "L" }, { name: "M" }, { name: "S" }],
    },
  ];
  const navigate = useNavigate();

  const [CountValue, setValueCount] = useState(1);

  const [isChooseSise, setChoseSize] = useState();

  const { userId, setType, setIsOpen, handleListProductCart } =
    useContext(SidebarContext);
  const [getDetailProductValue, setDetailProduct] = useState();
  const params = useParams();
  const [isLoading, setLoading] = useState(true);
  const [isValueId, setValueId] = useState(0);
  const handleResetForm = () => {
    setValueCount(1);
    setChoseSize(null);
  };
  const handleReturnToShop = () => {
    navigate("/shop");
  };
  const handleShowAccordion = (e) => {
    setValueId((pre) => (pre === e ? "null" : e));
  };
  const handleCount = (e) => {
    e === "count"
      ? setValueCount(CountValue + 1)
      : setValueCount(CountValue === 1 ? 1 : CountValue - 1);
  };
  const handleGetChoseSize = (e) => {
    setChoseSize(e);
  };
  const handleFetchApiDetailProduct = async (id) => {
    setLoading(true);
    await getDetailProduct(id)
      .then((res) => {
        setDetailProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const [isRelatedProduct, setRelatedProduct] = useState();
  console.log(isRelatedProduct);
  const handleGetRelatedProduct = (id) => {
    setLoading(true);
    getRelatedProduct(id)
      .then((res) => {
        console.log(res);
        setRelatedProduct(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (params.id) {
      handleFetchApiDetailProduct(params.id);
      handleGetRelatedProduct(params.id);
    }
  }, [params]);
  const handleAddToCart = () => {
    const data = {
      userId,
      productId: params.id,
      quantity: CountValue,
      size: isChooseSise,
    };
    addProductToCard(data)
      .then((res) => {
        handleResetForm();
        handleListProductCart(userId, "cart");
        setType("sp");
        setIsOpen(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const data = [
    {
      id: 0,
      title: "ADDITIONAL INFOMATION",
      content: (
        <AdditionalInfo
        // material={getDetailProductValue.material}
        // size={getDetailProductValue.size}
        />
      ),
    },
    {
      id: 1,
      title: "REVIEWS",
      content: <Review />,
    },
  ];
  return (
    <>
      <MyHeader />
      <MyLayout>
        <div className={container}>
          {isLoading ? (
            "isloading..."
          ) : (
            <>
              <div className={boxHeader} onClick={handleReturnToShop}>
                <div>Home {">"} Men</div>
                <div className={boxBackShop}>{">"} Return to previous page</div>
              </div>
              <div className={containerContents}>
                <div className={boxImg}>
                  {getDetailProductValue.images.map((i, k) => {
                    return (
                      <ReactImageMagnifier
                        height={350}
                        width={295}
                        srcOriginal={i}
                        srcPreview={i}
                        key={k}
                      />
                    );
                  })}
                </div>
                <div className={boxContent}>
                  <h2>{getDetailProductValue.name}</h2>
                  <h3>${getDetailProductValue.price}</h3>
                  <p>{getDetailProductValue.description}</p>
                  <div className={boxSize}>
                    <div>Size: {isChooseSise}</div>
                    <div className={size}>
                      {getDetailProductValue.size.map((i, k) => {
                        return (
                          <div
                            className={cls(size, {
                              [isActive]: isChooseSise === i.name,
                            })}
                            key={k}
                            onClick={() => handleGetChoseSize(i.name)}
                          >
                            {i.name}
                          </div>
                        );
                      })}
                    </div>
                    {isChooseSise && (
                      <div
                        onClick={() => setChoseSize("")}
                        style={{ cursor: "pointer" }}
                      >
                        Clear
                      </div>
                    )}
                  </div>
                  <div className={boxAdd}>
                    <div className={boxCount}>
                      <div
                        onClick={() => handleCount("count")}
                        style={{ cursor: "pointer" }}
                      >
                        +
                      </div>
                      <div>
                        {CountValue <= 9 && "0"}
                        {CountValue}
                      </div>
                      <div
                        onClick={() => handleCount("")}
                        style={{ cursor: "pointer" }}
                      >
                        -
                      </div>
                    </div>
                    <div className={boxBtn}>
                      <MyButton
                        content={
                          <div>
                            <MdOutlineLocalGroceryStore />

                            <span> ADD TO CART</span>
                          </div>
                        }
                        disabled={isChooseSise ? false : true}
                        onClick={() => handleAddToCart()}
                      />
                    </div>
                  </div>
                  <div className={boxbtnBuy}>
                    <div className={boxOr}>
                      <div />
                      <span>OR</span>
                      <div />
                    </div>

                    <div>
                      <MyButton
                        content={
                          <div>
                            <MdOutlineLocalGroceryStore />

                            <span> Buy</span>
                          </div>
                        }
                        disabled={isChooseSise ? false : true}
                      />
                    </div>
                  </div>
                  <div className={boxIcon}>
                    <TfiReload
                      style={{
                        fontSize: "20px",
                        border: "1px solid #333",
                        padding: "5px",
                        borderRadius: "50%",
                      }}
                    />
                    <CiHeart
                      style={{
                        fontSize: "20px",
                        border: "1px solid #333",
                        padding: "5px",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                  <div className={boxPayment}>
                    <PaymentList />
                  </div>
                  <div className={boxText}>
                    <div>
                      <b>Brand: </b>
                      <span>Brand 03</span>
                    </div>
                    <div>
                      <b>SKU: </b>
                      <span>87654</span>
                    </div>
                    <div>
                      <b>Category: </b>
                      <span>Men</span>
                    </div>
                  </div>
                  <div className={boxAccordionMenu}>
                    {data.map((i, k) => {
                      return (
                        <div style={{ paddingBottom: "20px" }}>
                          <AccordionMenu
                            key={k}
                            title={i.title}
                            contents={i.content}
                            onClick={() => handleShowAccordion(i.id)}
                            isValueId={isValueId}
                            Id={i.id}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className={containerFooter}>
                <h3>Related Product</h3>
                {isLoading ? (
                  "loading..."
                ) : (
                  <div>
                    <SliderCommon
                      isSliderProductItem
                      data={isRelatedProduct}
                      isSliderToShow={4}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </MyLayout>
      <MyFooter />
    </>
  );
}

export default DetailProduct;
