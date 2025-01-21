import MyButton from "../Button/Button";
import styles from "./style.module.scss";
import usetranslateX from "../../hooks/usetranslateXimg";

function SaleHomepage() {
  const { wraplayout, container, title, des, boxBtn, boxImage, containerBox } =
    styles;
  const { translateposition } = usetranslateX();

  return (
    <div className={wraplayout}>
      <div className={container}> 
        <div className={containerBox}>
          <div
            className={boxImage}
            style={{
              transform: `translateX(${translateposition}px)`,
              transition: "transform 0.6s ease",
            }}
          >
            <img
              src="https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2408026dmwobe.jpg"
              alt=""
            />
          </div>
          <div>
            <h2 className={title}>Sale Of The Year</h2>
            <p className={des}>
              Libero sed faucibus facilisis fermentum. Est nibh sed massa
              sodales.
            </p>

            <div className={boxBtn}>
              <MyButton content={"Read more"} isPriamry={false} />
            </div>
          </div>
          <div
            className={boxImage}
            style={{
              transform: `translateX(-${translateposition}px)`,
              transition: "transform 0.6s ease",
            }}
          >
            <img
              src="https://elise.vn/media/catalog/product/cache/bb52e54e5ec1828d48ae8bf7c98f9f69/f/f/ff2410227bkwowh2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SaleHomepage;
