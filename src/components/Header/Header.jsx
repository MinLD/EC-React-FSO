import MyBoxIcons from "./BoxIcons/BoxIcons";
import { dataBoxIcon, dataMenu } from "./contants";
import MyMenu from "./Menu/Menu";
import styles from "./style.module.scss";
import logo from "@icons/images/logo_elise.png";
function MyHeader() {
  const { containerHeader, flexBoxIcons, flexMenu, containerBox, container } = styles;
  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={flexBoxIcons}>
            {dataBoxIcon.slice(0,3).map((i, key) => {
              return <MyBoxIcons type={i.type} href={i.href} key={key} />;
            })}
          </div>
          <div className={flexMenu}>
            {dataMenu.slice(0, 3).map((item, key) => {
              return (
                <MyMenu content={item.content} href={item.href} key={key} />
              );
            })}
          </div>
        </div>
        <div className={containerBox}>
          <div>
            <img
              src={logo}
              alt="Logo"
              style={{ width: "133px", height: "  23px" }}
            />
          </div>
        </div>
        <div className={containerBox}>
        <div className={flexMenu}>
            {dataMenu.slice(3, 6).map((item, key) => {
              return (
                <MyMenu content={item.content} href={item.href} key={key} />
              );
            })}
          </div>
          <div className={containerBox}>
            {dataBoxIcon.slice(3, dataBoxIcon.length).map((i,key)=>{
              return <MyBoxIcons type={i.type} href={i.href} key={key}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
