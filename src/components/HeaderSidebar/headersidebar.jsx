import styles from "./style.module.scss";

function HeaderSideBar({ icon, content }) {
  const { container } = styles;
  return (
    <div className={container}>
      {icon}
      <div>{content}</div>
    </div>
  );
}

export default HeaderSideBar;
