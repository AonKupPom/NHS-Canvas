import axios from "axios";

export const register = async (user) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/user/register`, user).then(response => response.data)
}

export const getAllUsers = async () => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/user/getAll`).then(response => response.data)
}

export const getUserById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/user/get/${id}`).then(response => response.data)
}

export const updateUser = async (id, user) => {
    return axios.put(`${process.env.REACT_APP_API_PATH}/api/user/update/${id}`, user).then(response => response.data)
}

export const deleteUser = async (id) => {
    return axios.delete(`${process.env.REACT_APP_API_PATH}/api/user/delete/${id}`).then(response => response.data)
}

export const getAllForDatatable = async (options) => {
    const formData = {
        start: options.start,
        tableRange: options.length,
        search: options.search.value
    }
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/user/getAllForDatatable`, formData).then(response => response.data)
}