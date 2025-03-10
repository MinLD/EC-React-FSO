import { useContext, useEffect, useState } from "react";
import MyButton from "../../Button/Button";
import InputCommon from "../../inputcommon/inputcommon";
import styles from "./style.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { Register, SignIn } from "../../../apis/authService";
import { SidebarContext } from "../../../contexts/SideBarProvider";
import { StoreContext } from "../../../contexts/storeProvider";

function Login() {
  const { container, title, boxBtn, checkBox, lostpw } = styles;
  const { setIsOpen, handleListProductCart } = useContext(SidebarContext);
  const { setUserId } = useContext(StoreContext);
  const [isRegister, setRegister] = useState(false);
  const handletogle = () => {
    setRegister(!isRegister);
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // kết hợp với yup
    validationSchema: Yup.object({
      email: Yup.string().email("invalid email").required("email is required"),
      password: Yup.string()
        .min(6, "password must be least 6 characters")
        .required("password isLo required"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "passwords must match"
      ),
    }),

    onSubmit: async (values) => {
      const { email: username, password } = values;

      if (isRegister) {
        await Register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
          })
          .catch((res) => {
            toast.error(res.response.data.message);
          });
      }
      if (!isRegister) {
        await SignIn({ username, password })
          .then((res) => {
            if(res.status=== 200){
              toast.success('Login successful');
            }
            const { id, token, refreshToken } = res.data;
            
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("id", id);
            handleListProductCart(id, "cart");
            setIsOpen(false);
          })
          .catch((res) => {
            toast.error("Login Thất Bại");
          });
      }
    },
  });

  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "SIGN IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          type={"text"}
          label={"emai *"}
          formik={formik}
        />

        <InputCommon
          id="password"
          type={"password"}
          label={"password *"}
          formik={formik}
        />
        {isRegister && (
          <InputCommon
            id="cfmpassword"
            type={"password"}
            label={"Confirm password *"}
            formik={formik}
          />
        )}

        {!isRegister && (
          <div className={checkBox}>
            <input type="checkbox" name="" id="" />
            <span className="">Remember me</span>
          </div>
        )}
        <div className={boxBtn}>
          <MyButton content={isRegister ? "Register" : "Login"} type="submit" />
        </div>
        <div className={boxBtn}>
          <MyButton
            content={
              isRegister ? "Already have an account?" : "Don't have an account?"
            }
            isPriamry={false}
            onClick={() => handletogle()}
          />
        </div>
      </form>
      {!isRegister && <div className={lostpw}>Lost your password?</div>}
    </div>
  );
}
export default Login;
