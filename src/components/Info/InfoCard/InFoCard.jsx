import Truck from "@icons/svgs/TruckIcon.svg";
import styles from "../style.module.scss";
function MyInfoCard({ title, des, src }) {
  const { containerCard, content } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={40} src={src} alt="" />
      <div className={content}>
        <div>{title}</div>
        <div>{des}</div>
      </div>
    </div>
  );
}

export default MyInfoCard;
