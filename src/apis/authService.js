import axiosClient from "./apis";
import Cookies from "js-cookie";
const Register = async (body) => {
  return await axiosClient.post("/register", body);
};
const SignIn = async (body) => {
  return await axiosClient.post("/login", body);
};

const getInfo = async (id) => {
  console.log(id);
  return await axiosClient.get(`/user/info/${id}`);
};

export { Register, SignIn, getInfo };
