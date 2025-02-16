import axios from "axios";
import axiosClient from "./apis";
const addProductToCard = async (data) => {
  return await axiosClient.post("/cart", data);
};
const getCard = async (userId) => {
  return await axiosClient.get(`/cart/${userId}`);
};
const deleteItem = async (data) => {
  return await axiosClient.delete("/cart/deleteItem", {
    data: data,
  });
};
const deleteCard = async (data) => {
  console.log(data);
  return await axiosClient.delete("/cart/delete", {
    data: data,
  });
};
export { addProductToCard, getCard, deleteItem, deleteCard };
