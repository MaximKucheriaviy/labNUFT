import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

export const getHello = async () => {
  return await axios.get("/hello");
};

export const getFruit = async () => {
  return await axios.get("/fruit");
};

export const getNames = async () => {
  return await axios.get("/API/names");
};
