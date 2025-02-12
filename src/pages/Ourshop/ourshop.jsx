import { useNavigate } from "react-router-dom";
import MyHeader from "../../components/Header/Header";
import MyLayout from "../../components/Layout/Layout";
import BannerOurShop from "./component/banner";
import styles from "./styles.module.scss";
import Fillter from "./component/filter";
import { OutshopProvider } from "../../contexts/OurshopProvider";
import ListProduct from "./component/ListProduct";
import MyFooter from "../../components/Footer/Footer";

function Ourshop() {
  const { container, functionBox, btnPrv, sessionListProduct } = styles;
  const navigate = useNavigate();
  const handlePrvPages = () => {
    navigate(-1);
  };
  return (
    <>
      <OutshopProvider>
        <MyHeader />
        <MyLayout>
          <div className={container}>
            <div className={functionBox}>
              <div>
                Home &gt; <b>Shop</b>
              </div>
              <div onClick={() => handlePrvPages()} className={btnPrv}>
                &lt; Return to previous pages
              </div>
            </div>
            <BannerOurShop />
            <div>
              <Fillter />
            </div>
            <div>
              <ListProduct />
            </div>
          </div>
        </MyLayout>
        <MyFooter />
      </OutshopProvider>
    </>
  );
}

export default Ourshop;
