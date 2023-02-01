import axios from "axios";

export const newProductRent = async (product) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/productRent/create`, product).then(response => response.data)
}

export const getAllProductsRent = async () => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/productRent/getAll`).then(response => response.data)
}

export const getProductRentById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/productRent/get/${id}`).then(response => response.data)
}

export const updateProductRent = async (id, product) => {
    return axios.put(`${process.env.REACT_APP_API_PATH}/api/productRent/update/${id}`, product).then(response => response.data)
}

export const deleteProductRent = async (id) => {
    return axios.delete(`${process.env.REACT_APP_API_PATH}/api/productRent/delete/${id}`).then(response => response.data)
}

export const getLazyProductRent = async (skip) => {
    const formData = { skip }
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/productRent/getLazyProductRent`, formData).then(response => response.data)
}