import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getInfo } from "../apis/authService";
export const StoreContext = createContext();
export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const id = Cookies.get("id");
  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("id");
    setUserInfo(null);
    window.location.reload();
  };
  useEffect(() => {
    if (id) {
      getInfo(id)
        .then((res) => {
          console.log(res);
          setUserInfo(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  return (
    <StoreContext.Provider value={{ userInfo, handleLogout }}>
      {children}
    </StoreContext.Provider>
  );
};
