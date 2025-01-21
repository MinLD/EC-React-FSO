import styles from "../style.module.scss";
function MyMenu({ content, href, isOpen, setIsOpen }) {
  const { menuContent } = styles;
  const handleTongle = () => {
   setIsOpen(!isOpen);
  };

  return (
    <div className={menuContent} onClick={()=>setIsOpen(true)}>
      {content}
    </div>
  );
}

export default MyMenu;
