import { useEffect, useState } from "react";
import { createContext } from "react";
import { getCard } from "../apis/cardService";
import Cookies from "js-cookie";
export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [istype, setType] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [ListProductCart, setListProductCart] = useState([]);
  const handleListProductCart = (userId, type) => {
    if (userId && type === "cart") {
      getCard(userId)
        .then((res) => {
          setListProductCart(res.data.data);
        })
        .catch((errr) => {
          console.log("lỗi");
        });
    }
  };
  const value = {
    isOpen,
    setIsOpen,
    istype,
    setType,
    setLoading,
    isLoading,
    setListProductCart,
    ListProductCart,
    handleListProductCart,
  };
  useEffect(() => {
    handleListProductCart(Cookies.get("id"), "cart");
  }, []);

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
