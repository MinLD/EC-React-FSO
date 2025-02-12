import axiosClient from "./apis";
const getAllProduct = async (query) => {
  const { sortType, page, limit } = query;
  const res = await axiosClient.get(
    `/product?sortType=${sortType}&page=${page}&limit=${
      limit === "All" ? "" : limit
    }`
  );

  return res.data;
};

export default getAllProduct;
