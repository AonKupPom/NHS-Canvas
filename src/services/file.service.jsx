import axios from "axios";

export const getFile = async (fileName) => {
  return axios
    .get(`${process.env.REACT_APP_API_PATH}/uploads/${fileName}`)
    .then((response) => response.data);
};
