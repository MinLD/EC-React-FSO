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
const getDetailProduct = async (id) => {
  const res = await axiosClient.get(`/product/${id}`);
  return res.data;
};
const getRelatedProduct = async (id) => {
  const res = await axiosClient.get(`/related-products/${id}`);
  return res.data.relatedProducts;
};

export { getAllProduct, getDetailProduct, getRelatedProduct };
