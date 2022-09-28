import axios from "axios";

const login = async (account) => {
    return axios.post(`${process.env.REACT_APP_API_PATH}/api/auth/login`, account).then(response => response.data)
}

export {
    login
}