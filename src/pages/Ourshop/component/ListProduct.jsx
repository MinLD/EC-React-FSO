import { useContext } from "react";
import MyLayout from "../../../components/Layout/Layout";
import { OurshopContext } from "../../../contexts/OurshopProvider";
import ProductItem from "../../../components/ProductItem/ProductItem";
import styles from "../../ourshop/styles.module.scss";
function ListProduct() {
  const { containerProduct } = styles;
  const { isProduct } = useContext(OurshopContext);
  console.log(isProduct);
  return (
    <>
      <MyLayout>
        <div className={containerProduct}>
          {isProduct.map((i) => {
            return (
              <ProductItem
                key={i.id}
                src={i.images[0]}
                srcPre={i.images[1]}
                name={i.name}
                price1={i.price}
              />
            );
          })}
        </div>
      </MyLayout>
    </>
  );
}

export default ListProduct;
