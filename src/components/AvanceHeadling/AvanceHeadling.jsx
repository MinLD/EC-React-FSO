import MyLayout from "../Layout/Layout";
import styles from "./style.module.scss";
function AvanceHeadling() {
  const { container, headling, containerMidleBox, des, title } = styles;
  return (
    <MyLayout>
      <div className={container}>
        <div className={headling}></div>
        <div className={containerMidleBox}>
          <p className={des}>DON'T MISS SUPER OFFERS</p>
          <p className={title}>Our best products</p>
        </div>
        <div className={headling}></div>
      </div>
    </MyLayout>
  );
}

export default AvanceHeadling;
