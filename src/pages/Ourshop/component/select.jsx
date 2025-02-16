import styles from "../../ourshop/styles.module.scss";
function SelectBox({ option, getvalue, type, defaultValue }) {
  const { selectBox } = styles;
  console.log(defaultValue);
  return (
    <select
      className={selectBox}
      onChange={(e) => getvalue(e.target.value, type)}
      value={defaultValue}
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
