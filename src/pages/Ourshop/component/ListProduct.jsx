import { useContext, useState } from "react";
import MyLayout from "../../../components/Layout/Layout";
import {
  OurshopContext,
  OutshopProvider,
} from "../../../contexts/OurshopProvider";
import ProductItem from "../../../components/ProductItem/ProductItem";
import styles from "../../ourshop/styles.module.scss";
import cls from "classnames";
import MyButton from "../../../components/Button/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Cookies from "js-cookie";
import LoadingTextCommon from "../../../LoadingTextCommon/loadingTextCommon";
function ListProduct() {
  const { containerProduct } = styles;
  const {
    isProduct,
    isShowGrid,
    isLoading,
    handleLoadMore,
    isTotal,
    isLoadMore,
  } = useContext(OurshopContext);

  const { sessionListProduct, loader } = styles;
  const [chay1lan, setChay1lan] = useState(1);

  return (
    <div className={sessionListProduct}>
      <OutshopProvider>
        <MyLayout>
          {isLoading ? (
            "Loading..."
          ) : (
            <>
              <div className={!isShowGrid ? "" : containerProduct}>
                {isProduct.map((i, k) => {
                  return (
                    <ProductItem
                      key={k}
                      src={i.images[0]}
                      srcPre={i.images[1]}
                      name={i.name}
                      price1={i.price}
                      details={i}
                      isHomePages={false}
                      isShowGrid={isShowGrid}
                    />
                  );
                })}
              </div>
              {isProduct.length < isTotal && (
                <div style={{ width: "170px", margin: "50px auto" }}>
                  <MyButton
                    content={
                      isLoadMore ? <LoadingTextCommon /> : "LOAD MORE PRODUCT"
                    }
                    onClick={handleLoadMore}
                  />
                </div>
              )}
              {chay1lan === 1 && (
                <div
                  style={{ width: "170px", margin: "50px auto" }}
                  onClick={() => setChay1lan(2)}
                >
                  <MyButton
                    content={
                      isLoadMore ? (
                        <AiOutlineLoading3Quarters className={loader} />
                      ) : (
                        "LOAD MORE PRODUCT"
                      )
                    }
                    onClick={handleLoadMore}
                  />
                </div>
              )}
            </>
          )}
        </MyLayout>
      </OutshopProvider>
    </div>
  );
}

export default ListProduct;
