import axios from "axios";

const AxiosIntance = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  timeout: 10000,
});

export default AxiosIntance;
