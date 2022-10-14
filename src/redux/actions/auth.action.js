import { startFetch, endFetch, errorFetch } from './status.action'
import { login } from '../../services/auth.service'

export const SET_AUTH = 'SET_AUTH'

export const setAuth = (user) => {
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
                dispatch(setAuth(user))
                dispatch(errorFetch(''))
                dispatch(endFetch())
            }
        } catch (error) {
            dispatch(setAuth(null))
            dispatch(errorFetch(error))
            dispatch(endFetch())
        }
    }
}