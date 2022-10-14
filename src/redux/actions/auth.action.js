import { startFetch, endFetch, errorFetch } from './status.action'
import { login } from '../../services/auth.service'

export const SET_AUTH = 'SET_AUTH'

export const setAuth = (user) => {
    localStorage.setItem("currentUser", user)
    return {
        type: SET_AUTH,
        payload: user
    }
}

export const fetchAuthAsync = (userName, password) => {
    return async (dispatch) => {
        try {
            dispatch(startFetch())
            const user = await login({ userName, password })

            if (user) {
                localStorage.setItem("currentUser", user.token)
                dispatch(setAuth(user.token))
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