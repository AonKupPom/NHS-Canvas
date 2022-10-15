import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_PRODUCT } from '../actions/cart.action'
import jwt_encode from "jwt-encode"
import jwt_decode from "jwt-decode"

const initialState = localStorage.getItem("cart") ? jwt_decode(localStorage.getItem("cart")) : []

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
            localStorage.setItem("cart", jwt_encode(updateCart, process.env.REACT_APP_CART_SECRET))
            return updateCart

        case REMOVE_FROM_CART:
            localStorage.setItem("cart", jwt_encode(state.filter(item => item._id !== action.payload), process.env.REACT_APP_CART_SECRET))
            return state.filter(item => item._id !== action.payload)

        case REMOVE_ALL_PRODUCT:
            localStorage.removeItem("cart")
            return action.payload

        default:
            return state
    }
}