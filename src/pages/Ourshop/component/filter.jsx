import styles from "../../ourshop/styles.module.scss";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import cls from "classnames";
import { OurshopContext } from "../../../contexts/OurshopProvider";
import { useContext } from "react";
import SelectBox from "./select";
function Fillter() {
  const { containerFillter, containerBox, selectBox, left, right, boxIcon } =
    styles;
  const {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    setShowGrid,
    isShowGrid,
  } = useContext(OurshopContext);

  const getvalueSelect = (value, type) => {
    if (type === "sort") {
      setSortId(value);
    } else if (type === "show") {
      setShowId(value);
    }
  };
  const handleGetShowGrid = (type) => {
    if (type === "grid") {
      setShowGrid(true);
    } else if (type === "list") {
      setShowGrid(false);
    }
  };

  return (
    <>
      <div className={containerFillter}>
        <div className={containerBox}>
          <div>
            <SelectBox
              option={sortOptions}
              getvalue={getvalueSelect}
              type="sort"
            />
          </div>
          <div className={boxIcon}>
            <TfiLayoutGrid4
              style={{ fontSize: "20px" }}
              onClick={() => handleGetShowGrid("grid")}
            />
          </div>
          <div
            style={{ width: "1px", height: "20px", backgroundColor: "#e1e1e1" }}
          />
          <div className={boxIcon}>
            <CiCircleList
              style={{ fontSize: "20px" }}
              onClick={() => handleGetShowGrid("list")}
            />
          </div>
        </div>
        <div className={containerBox}>
          <div>Show</div>
          <div>
            <SelectBox
              option={showOptions}
              getvalue={getvalueSelect}
              type="show"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fillter;
