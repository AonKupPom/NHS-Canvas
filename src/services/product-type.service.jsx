import axios from "axios";

export const newProductType = async (productType) => {
  return axios
    .post(`${process.env.REACT_APP_API_PATH}/api/productType/create`, productType, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);
};

export const getAllProductTypes = async () => {
  return axios
    .get(`${process.env.REACT_APP_API_PATH}/api/productType/getAll`)
    .then((response) => response.data);
};

export const getProductTypeById = async (id) => {
  return axios
    .get(`${process.env.REACT_APP_API_PATH}/api/productType/get/${id}`)
    .then((response) => response.data);
};

export const updateProductType = async (id, productType) => {
  return axios
    .put(
      `${process.env.REACT_APP_API_PATH}/api/productType/update/${id}`,
      productType,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    )
    .then((response) => response.data);
};

export const deleteProductType = async (id, fileDelete) => {
  return axios
    .delete(
      `${process.env.REACT_APP_API_PATH}/api/productType/delete/${id}/${fileDelete}`
    )
    .then((response) => response.data);
};

export const getProductTypeForDatatable = async (options) => {
  const formData = {
    start: options.start,
    tableRange: options.length,
    search: options.search.value,
  };
  return axios
    .post(
      `${process.env.REACT_APP_API_PATH}/api/productType/getProductTypeForDatatable`,
      formData
    )
    .then((response) => response.data);
};
