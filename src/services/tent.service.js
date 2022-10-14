import axios from "axios";

export const newTent = async (tent) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/tent/create`, tent).then(response => response.data)
}

export const getAllTents = async () => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/tent/getAll`).then(response => response.data)
}

export const getTentById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/tent/get/${id}`).then(response => response.data)
}

export const updateTent = async (id, tent) => {
    return axios.put(`${process.env.REACT_APP_API_PATH}/api/tent/update/${id}`, tent).then(response => response.data)
}

export const deleteTent = async (id) => {
    return axios.delete(`${process.env.REACT_APP_API_PATH}/api/tent/delete/${id}`).then(response => response.data)
}