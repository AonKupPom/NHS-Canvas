import axios from "axios";

export const login = async (account) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/auth/login`, account).then(response => response.data)
}

export const googleLogin = async (account) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/auth/googleLogin`, account).then(respond => respond.data)
}