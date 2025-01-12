import { useEffect, useState } from "react";
import AvanceHeadling from "../AvanceHeadling/AvanceHeadling";
import MyBanner from "../Banner/Banner";
import MyHeader from "../Header/Header";
import HeadlingListProduct from "../HeadlingListProduct/HeadlingListProduct";
import MyInfo from "../Info/Info";
import styles from "./style.module.scss";
import getAllProduct from '../../apis/apiProduct'
import PopularProduct from "../PopularProduct/PopularProduct";
import DataProductFake from "./DataFake.js"
function MyHomePage() {
  console.log(DataProductFake)

  const [listproduct, setListproduct]=useState([]);
  const { container } = styles;
  useEffect(() => { 
    getAllProduct().then((res)=>{
      setListproduct(res)
      console.log(res)
    })
  }, []);
  return (
    <>
      <div className={container}>
        <MyHeader />
        <MyBanner />
        <MyInfo />
        <AvanceHeadling />
        <HeadlingListProduct data={DataProductFake.slice(0,2)}/>
        <PopularProduct data={DataProductFake.slice(2,DataProductFake.length)}/>
      </div>
    </>
  );
}

export default MyHomePage;
