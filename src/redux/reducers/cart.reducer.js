import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart.action'

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let updateCart
            const foundItem = state.find(item => item._id === action.payload._id)

            if (!foundItem) {
                updateCart = [...state, action.payload]
            }
            else {
                updateCart = state.map(item => ({
                    ...item,
                    quantity: item._id === foundItem._id ? item.quantity + 1 : item.quantity
                }))
            }
            localStorage.setItem("cart", JSON.stringify(updateCart))
            return updateCart

        case REMOVE_FROM_CART:
            localStorage.setItem("cart", JSON.stringify(state.filter(item => item._id !== action.payload)))
            return state.filter(item => item._id !== action.payload)

        default:
            return state
    }
}