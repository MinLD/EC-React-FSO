import MyButton from "../../../../components/Button/Button";
import LoadingTextCommon from "../../../../LoadingTextCommon/loadingTextCommon";
import styles from "../../style.module.scss";
import cls from "classnames";
function PayMent({ isLoading, ListProductCart }) {
  const {
    containerPayment,
    boxTotal,
    paymentContainer,
    paymentTitle,
    containerPayCard,
    titleTotal,
    boxSubTotal,
    boxBtn,
    containerCartTable,
    boxLoading,
    iconPayments
  } = styles;
  const data = [
    {
      name: "PayPal",
      logo: "https://img.icons8.com/color/48/000000/paypal.png",
    },
    {
      name: "Apple Pay",
      logo: "https://img.icons8.com/color/48/000000/apple-pay.png",
    },
    {
      name: "Apple Pay",
      logo: "https://img.icons8.com/color/48/000000/apple-pay.png",
    },
    {
      name: "Google Pay",
      logo: "https://img.icons8.com/color/48/000000/google-pay.png",
    },
    {
      name: "Apple Pay",
      logo: "https://img.icons8.com/color/48/000000/apple-pay.png",
    },
    {
      name: "Apple Pay",
      logo: "https://img.icons8.com/color/48/000000/apple-pay.png",
    },
  ];
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
      <div>
        <div className={paymentContainer}>
          <div className={paymentTitle}>
            GUARANTEED <span style={{ color: "#2e7d32" }}>SAFE</span> CHECKOUT
          </div>
          <div className={containerPayCard}>
            {data.map((i, k) => {
              return (
                <div key={k} className={iconPayments}>
                  <img src={i.logo} alt={i.name} width="50px" height="34px" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "-25px",
            textTransform: "uppercase",
          }}
        >
          Your Payment is 100% Secure
        </p>
      </div>
      {isLoading && (
        <div className={boxLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default PayMent;
