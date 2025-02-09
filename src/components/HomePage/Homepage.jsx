import { useEffect, useState } from "react";
import AvanceHeadling from "../AvanceHeadling/AvanceHeadling";
import MyBanner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import HeadlingListProduct from "../HeadlingListProduct/HeadlingListProduct";
import MyInfo from "../Info/Info";
import styles from "./style.module.scss";
import getAllProduct from "../../apis/apiProduct";
import PopularProduct from "../PopularProduct/PopularProduct";
import DataProductFake from "./DataFake.js";
import SaleHomepage from "../SaleHomepage/SaleHomepase.jsx";
import MyFooter from "../Footer/Footer.jsx";
function MyHomePage() {
  const [listproduct, setListproduct] = useState([]);

  const { container } = styles;
  useEffect(() => {
    const query = {
      sortType: '',
      page: 1,
      limit: '',
    };
    getAllProduct(query).then((res) => {
      setListproduct(res);
    });
  }, []);
  return (
    <div className={container}>
      <MyHeader />
      <MyBanner />
      <MyInfo />
      <AvanceHeadling />
      <HeadlingListProduct data={listproduct.slice(0, 2)} />
      <PopularProduct data={listproduct.slice(2, listproduct.length)} />
      <SaleHomepage />
      <MyFooter />
    </div>
  );
}

export default MyHomePage;
