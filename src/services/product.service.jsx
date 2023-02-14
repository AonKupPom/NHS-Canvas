import axios from "axios";

export const newProduct = async (product) => {
  return axios
    .post(`${process.env.REACT_APP_API_PATH}/api/product/create`, product, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export const getAllProducts = async () => {
  return axios
    .get(`${process.env.REACT_APP_API_PATH}/api/product/getAll`)
    .then((response) => response.data);
};

export const getProductById = async (id) => {
  return axios
    .get(`${process.env.REACT_APP_API_PATH}/api/product/get/${id}`)
    .then((response) => response.data);
};

export const updateProduct = async (id, product) => {
  return axios
    .put(
      `${process.env.REACT_APP_API_PATH}/api/product/update/${id}`,
      product,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => response.data);
};

export const deleteProduct = async (id, fileDelete) => {
  return axios
    .delete(
      `${process.env.REACT_APP_API_PATH}/api/product/delete/${id}/${fileDelete}`
    )
    .then((response) => response.data);
};

export const getProductForDatatable = async (options) => {
  const formData = {
    start: options.start,
    tableRange: options.length,
    search: options.search.value,
  };
  return axios
    .post(
      `${process.env.REACT_APP_API_PATH}/api/product/getProductForDatatable`,
      formData
    )
    .then((response) => response.data);
};
