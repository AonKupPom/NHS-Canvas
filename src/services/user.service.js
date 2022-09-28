import axios from "axios";

const register = async (user) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/user/register`, user).then(response => response.data)
}

const getAllUsers = async () => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/user/getAll`).then(response => response.data)
}

const getUserById = async (id) => {
    return axios.get(`${process.env.REACT_APP_API_PATH}/api/user/get/${id}`).then(response => response.data)
}

const updateUser = async (id, user) => {
    return axios.put(`${process.env.REACT_APP_API_PATH}/api/user/update/${id}`, user).then(response => response.data)
}

const deleteUser = async (id) => {
    return axios.delete(`${process.env.REACT_APP_API_PATH}/api/user/delete/${id}`).then(response => response.data)
}

export {
    register,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}