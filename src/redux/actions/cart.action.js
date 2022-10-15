
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_ALL_PRODUCT = 'REMOVE_ALL_PRODUCT';

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

export const removeAllProduct = () => {
    return {
        type: REMOVE_ALL_PRODUCT,
        payload: []
    }
}