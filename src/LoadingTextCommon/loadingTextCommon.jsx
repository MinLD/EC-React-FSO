import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./style.module.scss";
function LoadingTextCommon() {
  const { loader } = styles;
  return <AiOutlineLoading3Quarters className={loader} />;
}

export default LoadingTextCommon;
