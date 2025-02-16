import CartTable from "./cartTable";
import styles from "../../style.module.scss";
import PayMent from "./payment";
import { useContext } from "react";
import { SidebarContext } from "../../../../contexts/SideBarProvider";
import LoadingTextCommon from "../../../../LoadingTextCommon/loadingTextCommon";
function Content() {
  const { containerContent } = styles;
  const {
    ListProductCart,
    handleListProductCart,
    isLoading,
    setLoading,
    userId,
  } = useContext(SidebarContext);

  return (
    <div className={containerContent}>
      <CartTable
        ListProductCart={ListProductCart}
        handleListProductCart={handleListProductCart}
        isLoading={isLoading}
        setLoading={setLoading}
        userId={userId}
      />

      <PayMent isLoading={isLoading} ListProductCart={ListProductCart} />
    </div>
  );
}

export default Content;
