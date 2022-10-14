
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (addProduct) => {
    return {
        type: ADD_TO_CART,
        payload: addProduct
    }
}

export const removeFromCart = (_id) => {
    return {
        type: REMOVE_FROM_CART,
        payload: _id
    }
}