import { useState } from "react";
import MyButton from "../Button/Button";
import styles from "./style.module.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Formik } from "formik";
function InputCommon({ type, label, placeholder, ...props }) {
  const { formik, id } = props;
  const {
    container,
    inputlabel,
    check,
    boxInput,
    boxbtn,
    text,
    boxIcon,
    errMSG,
  } = styles;
  const isShowEys = type === "password";

  const [isShowpw, setIsShowpw] = useState(false);
  const isErr = formik.touched[id] && formik.errors[id];
  const messageErr = formik.errors[id]
  
  return (
    <div className={container}>
      <div className={inputlabel}>{label}</div>
      <div className={boxInput}>
        <input
          type={isShowEys && isShowpw ? "text" : type}
          placeholder={placeholder}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isShowEys && (
          <div className={boxIcon} onClick={() => setIsShowpw(!isShowpw)}>
            {isShowpw ? <FaEyeSlash /> : <FaEye />}
          </div>
        )}
        {isErr && <div className={errMSG}>*{messageErr}</div>}
        
      </div>
    </div>
  );
}

export default InputCommon;
