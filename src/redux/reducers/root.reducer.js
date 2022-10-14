import { combineReducers } from 'redux'
import { cartReducer } from './cart.reducer'
import { authReducer } from './auth.reducer'
import { statusReducer } from './status.reducer'

export const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    status: statusReducer
})