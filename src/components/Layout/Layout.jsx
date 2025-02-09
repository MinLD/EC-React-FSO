import style from "./style.module.scss";
function MyLayout({ children }) {
  const { wraplayout, container } = style;
  return (
    <main className={wraplayout}>
      <div className={container}>{children}</div>
    </main>
  );
}

export default MyLayout;
