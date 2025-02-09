import { useContext } from "react";
import MyLayout from "../../../components/Layout/Layout";
import {
  OurshopContext,
  OutshopProvider,
} from "../../../contexts/OurshopProvider";
import ProductItem from "../../../components/ProductItem/ProductItem";
import styles from "../../ourshop/styles.module.scss";
import cls from "classnames";
function ListProduct() {
  const { containerProduct } = styles;
  const { isProduct, isShowGrid } = useContext(OurshopContext);

  return (
    <>
      <OutshopProvider>
        <MyLayout>
          <div className={!isShowGrid ? "" : containerProduct}>
            {isProduct.map((i) => {
              return (
                <ProductItem
                  key={i.id}
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
        </MyLayout>
      </OutshopProvider>
    </>
  );
}

export default ListProduct;
