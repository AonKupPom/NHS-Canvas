import { startFetch, endFetch, errorFetch } from './status.action'
import { login } from '../../services/auth.service'
import jwt_encode from "jwt-encode"

export const SET_AUTH = 'SET_AUTH'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGOUT = 'LOGOUT'

export const setAuth = (data) => {
    localStorage.setItem("Y3VycmVudFVzZXI=", data.token)
    localStorage.setItem("cm9sZQ==_", jwt_encode(data.user.role, process.env.REACT_APP_CART_SECRET))
    return {
        type: SET_AUTH,
        payload: data.user
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const Logout = () => {
    localStorage.removeItem("Y3VycmVudFVzZXI=")
    localStorage.removeItem("cm9sZQ==_")
    return {
        type: LOGOUT,
        payload: null
    }
}

export const fetchAuthAsync = (userName, password) => {
    return async (dispatch) => {
        try {
            dispatch(startFetch())
            const user = await login({ userName, password })

            if (user) {
                localStorage.setItem("Y3VycmVudFVzZXI=", user.token)
                dispatch(setAuth(user))
                dispatch(errorFetch(null))
                dispatch(endFetch())
            }
        } catch (error) {
            dispatch(setAuth(null))
            dispatch(errorFetch(error.message))
            dispatch(endFetch())
        }
    }
}