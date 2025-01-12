import BannerItJob from "../../../src/assets/Images/BanerITJob.jpg";
import MyButton from "../Button/Button";
import styles from "./style.module.scss";
function MyBanner() {
  
  const { container, content , title, des} = styles;
  return (
    <div className={container}>
      <div className={content}>
        <h1 className={title}>XSTORE ELISE DEMO</h1>

        <div className={des}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <MyButton content={"Go to shop"}/>
      </div>
    </div>
  );
}

export default MyBanner;
