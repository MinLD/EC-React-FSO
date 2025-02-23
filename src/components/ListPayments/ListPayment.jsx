import styles from "./style.module.scss";
function PaymentList() {
  const { paymentContainer, paymentTitle, containerPayCard, iconPayments } =
    styles;
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
  return (
    <>
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

      <div>
        <p
          style={{
            textAlign: "center",
            marginTop: "10px",
            textTransform: "uppercase",
          }}
        >
          Your Payment is 100% Secure
        </p>
      </div>
    </>
  );
}

export default PaymentList;
