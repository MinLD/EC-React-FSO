import styles from "../style.module.scss";
function MyMenu({content, href}) {
    const {menuContent} = styles
    return (  
        <div className={menuContent}>
            {content}
        </div>
    );
}

export default MyMenu