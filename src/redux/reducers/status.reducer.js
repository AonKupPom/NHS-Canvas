import { FETCH_START, FETCH_END, FETCH_ERROR } from "../actions/status.action"

const initialState = {
    loading: false,
    error: null
}

export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true
            }
        case FETCH_END:
            return {
                ...state,
                loading: false
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}