import CountDownBanner from "../CountDownBanner/CountDownBanner";
import MyLayout from "../Layout/Layout";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./style.module.scss";

function HeadlingListProduct({ data }) {
  const { container, containerItems } = styles;
  console.log(data);
  return (
    <MyLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItems}>
          {data.map((i) => (
            <ProductItem
              key={i.id}
              src={i.images[0]}
              srcPre={i.images[1]}
              name={i.name}
              price1={i.price}
            />
          ))}
        </div>
      </div>
    </MyLayout>
  );
}

export default HeadlingListProduct;
