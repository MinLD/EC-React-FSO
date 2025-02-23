import { getDetailProduct } from "../../apis/apiProduct";
import { dataMenu } from "./contants";
import styles from "./style.module.scss";
import logo from "@icons/images/logo_elise.png";
const { container, boxMenu } = styles;

function MyFooter() {
  return (
    <div className={container}>
      <div>
        <img src={logo} alt="" style={{ width: "155px" }} />
      </div>
      <div className={boxMenu}>
        {dataMenu.map((i, k) => {
          return <div key={k}>{i.content}</div>;
        })}
      </div>
      <div >
        © Elise 2020. All rights reserved
      </div>
    </div>
  );
}

export default MyFooter;
