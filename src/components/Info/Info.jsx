import MyLayout from "../Layout/Layout";
import { dataInfo } from "./contant.js";
import MyInfoCard from "./InfoCard/InFoCard";
import styles from "./style.module.scss";
function MyInfo() {
  const { container } = styles;
  return (
    <>
      <MyLayout>
        <div className={container}>
          {dataInfo.map((i, key) => {
            return <MyInfoCard key={key} title={i.title} des = {i.des} src={i.src} />;
          })}
        </div>
      </MyLayout>
    </>
  );
}

export default MyInfo;
