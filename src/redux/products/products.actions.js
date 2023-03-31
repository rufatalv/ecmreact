import productsTypes from "./products.types";

export const addProductsStart = productData => ({
    type: productsTypes.ADD_NEW_PRODUCT_START,
    payload: productData
})