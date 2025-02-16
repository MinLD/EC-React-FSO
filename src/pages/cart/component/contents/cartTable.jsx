import {
  addProductToCard,
  deleteCard,
  deleteItem,
} from "../../../../apis/cardService";
import MyButton from "../../../../components/Button/Button";
import LoadingTextCommon from "../../../../LoadingTextCommon/loadingTextCommon";
import SelectBox from "../../../Ourshop/component/select";
import styles from "../../style.module.scss";
import { FaRegTrashCan } from "react-icons/fa6";
import cls from "classnames";
import Cookies from "js-cookie";
function CartTable({
  ListProductCart,
  handleListProductCart,
  isLoading,
  setLoading,
  userId,
}) {
  const {
    td,
    containerProduct,
    boxProduct,
    boxtextProduct,
    iconProduct,
    containerContent,
    boxBtnContent,
    iconTrashCan,
    containerCartTable,
    boxLoading,
    Layout,
  } = styles;

  const dataTitle = [
    {
      id: 0,
      label: "PRODUCT",
    },
    {
      id: 1,
      label: "PRICE",
    },
    {
      id: 2,
      label: "SKU",
    },
    {
      id: 3,
      label: "QUANTITY",
    },
    {
      id: 4,
      label: "SUBTOTAL",
    },
  ];
  const option = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "5",
    },
    {
      value: "6",
      label: "6",
    },
    {
      value: "7",
      label: "7",
    },
    {
      value: "8",
      label: "8",
    },
    {
      value: "9",
      label: "9",
    },
    {
      value: "10",
      label: "10",
    },
    {
      value: "11",
      label: "11",
    },
    {
      value: "12",
      label: "12",
    },
  ];
  const getValueSelect = (userId, productId, quantity, size) => {
    const data = {
      userId: userId,
      productId: productId,
      quantity: quantity,
      size: size,
      isMultiple: true,
    };
    setLoading(true);
    addProductToCard(data)
      .then((err) => {
        handleListProductCart(userId, "cart");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  const handleDeleteItem = (productId, userId) => {
    console.log(userId);
    const data = {
      productId,
      userId,
    };
    setLoading(true);
    deleteItem(data)
      .then((res) => {
        handleListProductCart(userId, "cart");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleDeleteCart = () => {
    const data = {
      userId: userId,
    };
    setLoading(true);
    deleteCard(data)
      .then((res) => {
        handleListProductCart(userId, "cart");
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className={containerCartTable}>
      <table className={cls({ [Layout]: isLoading })}>
        <thead>
          {dataTitle.map((i) => {
            return (
              <th key={i.id} className={td}>
                {i.label}
              </th>
            );
          })}
        </thead>
        <tbody>
          {ListProductCart.map((i, k) => {
            return (
              <tr key={k}>
                <td>
                  <div className={containerProduct}>
                    <div className={boxProduct}>
                      <div>
                        <img
                          src={i.images[1]}
                          alt={i.name}
                          style={{ width: "80px" }}
                        />
                      </div>
                      <div className={boxtextProduct}>
                        <span>{i.name}</span>
                        <span>Size: {i.size}</span>
                      </div>
                    </div>

                    <div
                      className={iconTrashCan}
                      onClick={() => handleDeleteItem(i.productId, i.userId)}
                    >
                      <FaRegTrashCan />
                    </div>
                  </div>
                </td>
                <td style={{ verticalAlign: "top" }}>
                  ${Number(i.price).toFixed(2)}
                </td>
                <td style={{ verticalAlign: "top" }}>{i.sku}</td>
                <td style={{ verticalAlign: "top" }}>
                  <SelectBox
                    option={option}
                    defaultValue={i.quantity}
                    getvalue={(e) => {
                      getValueSelect(i.userId, i.productId, e, i.size);
                    }}
                  />
                </td>
                <td style={{ verticalAlign: "top" }}>${i.total.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td style={{ borderTop: "1px solid #ddd" }} colSpan={5} />
          </tr>
        </tfoot>
      </table>
      {isLoading && (
        <div className={boxLoading}>
          <LoadingTextCommon />
        </div>
      )}
      <div className={containerContent} style={{ marginTop: "-80px" }}>
        <div>
          <input
            style={{
              width: "200px",
              padding: "8px",
              borderRadius: "2px",
              outline: "none",
            }}
            type="text"
            placeholder="Coupon code"
          />
          <button style={{ width: "60px", height: "36px" }}>oke</button>
        </div>
        <div className={boxBtnContent}>
          <div className={iconProduct}>
            <MyButton
              content={
                <div>
                  {" "}
                  <FaRegTrashCan /> CLEAR SHOPPING CART
                </div>
              }
              isPriamry={false}
              onClick={handleDeleteCart}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTable;
