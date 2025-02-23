import style from "./btn.module.scss";
import classNames from "classnames";
function MyButton({ content, isPriamry = true, disabled = false, ...props }) {
  const { btn, black, primari,activeDisabled } = style;
  return (
    <>
      <button
        className={classNames(btn, {
          [primari]: isPriamry,
          [black]: !isPriamry,
          [activeDisabled]: disabled,
        })}
        {...props}
      >
        {content}
      </button>
    </>
  );
}

export default MyButton;
