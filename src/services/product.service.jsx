import axios from "axios";

export const newProduct = async (product) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/product/create`, product).then(response => response.data)
}

export const getAllProducts = async () => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/product/getAll`).then(response => response.data)
}

export const getProductById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/product/get/${id}`).then(response => response.data)
}

export const updateProduct = async (id, product) => {
    return axios.put(`${process.env.REACT_APP_API_PATH}/api/product/update/${id}`, product).then(response => response.data)
}

export const deleteProduct = async (id) => {
    return axios.delete(`${process.env.REACT_APP_API_PATH}/api/product/delete/${id}`).then(response => response.data)
}