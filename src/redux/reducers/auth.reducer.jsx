import { SET_AUTH, SET_CURRENT_USER, LOGOUT } from "../actions/auth.action";
import jwt_decode from "jwt-decode";

const initialState = {
  user: localStorage.getItem("Y3VycmVudFVzZXI=")
    ? {
        role: localStorage.getItem("cm9sZQ==_")
          ? jwt_decode(localStorage.getItem("cm9sZQ==_"))
          : null,
      }
    : null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        user: action.payload,
      };

    case SET_CURRENT_USER:
      return {
        user: action.payload,
      };
    case LOGOUT:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};
