import axios from "axios";
import Cookies from "js-cookie";
const axiosClient = axios.create({
  baseURL: "https://be-project-reactjs.vercel.app/api/v1",
  timeout: 10000,
  headers: {
    "content-Type": "application/json",
  },
});
axiosClient.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = Cookies.get("refreshToken");
      if (!refreshToken) return Promise.reject(err);
      try {
        const res = await axiosClient.post("/refresh-Token", {
          token: refreshToken,
        })
        const newAccesToken = res.data.accessToken
        console.log(res);
        Cookies.set('token',newAccesToken);
        originalRequest.headers.Authorization = `Bearer ${newAccesToken}`
        return axiosClient(originalRequest)
      } catch {
        Cookies.remove("token");
        Cookies.remove("refreshToken");

        return Promise.reject(err);
      }
    }
  }
);

export default axiosClient;
