import { SET_AUTH, SET_CURRENT_USER, LOGOUT } from "../actions/auth.action"

const initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                user: action.payload
            }

        case SET_CURRENT_USER:
            return {
                user: action.payload
            }
        case LOGOUT:
            return {
                user: action.payload
            }

        default:
            return state
    }
}