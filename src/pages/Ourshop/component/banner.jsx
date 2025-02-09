import MyButton from "../../../components/Button/Button";
import styles from "../../ourshop/styles.module.scss";
function BannerOurShop() {
  const { containerBanner, btnBox } = styles;
  return (
    <div className={containerBanner}>
      <div>The Class Make The Comback</div>
      <div className={btnBox}>
        <MyButton content={"Buy"} />
      </div>
    </div>
  );
}

export default BannerOurShop;
