import axiosClient from "./apis";
const getAllProduct = async (query) => {
  const { sortType, page, limit } = query;
  const res = await axiosClient.get(
    `/product?sortType=${sortType}&page=${page}&limit=${
      limit === "All" ? "" : limit
    }`
  );
  console.log(res);

  return res.data.contents;
};

export default getAllProduct;
