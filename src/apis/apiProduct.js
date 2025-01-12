import axiosClient from './apis'
const getAllProduct = async () => {
    const res = await axiosClient.get('/product'); 
   return res.data.contents
};

export default getAllProduct 
