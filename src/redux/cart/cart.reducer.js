import cartTypes from "./cart.types";

const initialState = {
    cartItems: []
} 
const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case cartTypes.ADD_TO_CART: 
        return{
            ...state,
            cartItems: [
                ...state
            ]
        }
        default:
            return state;
    }
}