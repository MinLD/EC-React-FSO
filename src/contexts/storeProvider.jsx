import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getInfo } from "../apis/authService";
export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [userId, setUserId] = useState(Cookies.get("id"));

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("id");
    setUserInfo(null);
    window.location.reload();
  };
  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          console.log(res);
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userId]);
  return (
    <StoreContext.Provider value={{ userInfo, handleLogout, setUserId }}>
      {children}
    </StoreContext.Provider>
  );
};
