import styles from "../../ourshop/styles.module.scss";
function SelectBox({ option, getvalue, type }) {
  const { containerFillter, containerBox, selectBox, left, right, boxIcon } =
    styles;
  return (
    <select
      className={selectBox}
      onChange={(e) => getvalue(e.target.value, type)}
    >
      {option.map((e, k) => {
        return (
          <option key={e.value} value={e.value}>
            {e.label}
          </option>
        );
      })}
    </select>
  );
}

export default SelectBox;
