import HeaderSideBar from "../../HeaderSidebar/headersidebar";
import ItemProduct from "../../Itemproduct/itemproduct";
import styles from "./style.module.scss";
import { TfiReload } from "react-icons/tfi";
function Compare() {
  const { container } = styles;
  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: "30px" }} />}
        content={"Compare"}
      />
      <ItemProduct/>
    </div>
  );
}

export default Compare;
