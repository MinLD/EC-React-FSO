import MyButton from "../Button/Button";
import styles from "./style.module.scss";
function CountDownBanner() {
  const { container, title, containerBanner,boxBtn } = styles;
  return (
    <div className={container}>
      <div className={containerBanner}>
        <div className={title}></div>

            <div className={boxBtn}>
                <MyButton content={'Buy now'} />
            </div>
      </div>
    </div>
  );
}

export default CountDownBanner;
