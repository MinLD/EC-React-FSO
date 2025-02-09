import MyLayout from "../Layout/Layout";
import ProductItem from "../ProductItem/ProductItem";
import styles from './style.module.scss';
function PopularProduct({data}) {
    const {container} = styles
    return ( 
        <>
        <MyLayout> 
            <div className={container}>
            {data.map((i) => (
            <ProductItem
              key={i.id}
              src={i.images[0]}
              srcPre={i.images[1]}
              name={i.name}
              price1={i.price}
              details={i}
            />
          ))}
            </div>
        </MyLayout>
        </>
     );
}

export default PopularProduct;