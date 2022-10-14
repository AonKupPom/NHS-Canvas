import { SET_AUTH } from "../actions/auth.action"

const initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH:
            return {
                user: action.payload
            }

        default:
            return state
    }
}