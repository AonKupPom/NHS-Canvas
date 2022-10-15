import { startFetch, endFetch, errorFetch } from './status.action'
import { login } from '../../services/auth.service'

export const SET_AUTH = 'SET_AUTH'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const LOGOUT = 'LOGOUT'

export const setAuth = (data) => {
    localStorage.setItem("currentUser", data.token)
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
    localStorage.removeItem("currentUser")
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
                localStorage.setItem("currentUser", user.token)
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