import MyButton from "../../../../components/Button/Button";
import LoadingTextCommon from "../../../../LoadingTextCommon/loadingTextCommon";
import styles from "../../style.module.scss";
import cls from "classnames";
import PaymentList from "../../../../components/ListPayments/ListPayment";
function PayMent({ isLoading, ListProductCart, boxTotals = true }) {
  const {
    containerPayment,
    boxTotal,

    titleTotal,
    boxSubTotal,
    boxBtn,
    containerCartTable,
    boxLoading,
  } = styles;

  const subTotal = ListProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

  return (
    <div className={cls(containerPayment, containerCartTable)}>
      <div className={boxTotal}>
        <div className={titleTotal}>CART TOTALS</div>
        <div style={{ borderBottom: "1px solid #e1e1e1" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div className={boxSubTotal}>
            <div>Subtotal</div>
            <div>${subTotal.toFixed(2)} </div>
          </div>
          <div className={boxSubTotal}>
            <div>
              <b>TOTAL</b>
            </div>
            <div>
              <b style={{ fontSize: " 25px" }}> ${subTotal.toFixed(2)}</b>
            </div>
          </div>
        </div>
        <div className={boxBtn}>
          <div>
            <MyButton
              content={"PROCESS TO CHECKOUT"}
              style={{ width: "550px" }}
            />
          </div>
          <div>
            <MyButton
              content={"CONTINUE SHOPPING"}
              isPriamry={false}
              style={{ width: "550px" }}
            />
          </div>
        </div>
      </div>

      <PaymentList />
      {isLoading && boxTotals && (
        <div className={boxLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default PayMent;
