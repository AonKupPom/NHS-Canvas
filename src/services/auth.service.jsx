import axios from "axios";

export const login = async (account) => {
  return axios
    .post(`${process.env.REACT_APP_API_PATH}/api/auth/login`, account)
    .then((response) => response.data);
};

export const googleLogin = async (account) => {
  return axios
    .post(`${process.env.REACT_APP_API_PATH}/api/auth/googleLogin`, account)
    .then((respond) => respond.data);
};

export const googleAccountData = async (tokenResponse) => {
  return axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
    headers: {
      Authorization: `Bearer ${tokenResponse.access_token}`,
    },
  });
};
