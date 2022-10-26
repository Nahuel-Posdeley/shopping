import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount: 0,
    productList: [],
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state,action) => {
            state.productList = [...state.productList, action.payload]
            state.totalCount += 1;
        },
        removeProductToCart: (state,action) => {
            const productId = action.payload;
            state.totalCount -= 1;
            state.productList = state.productList.filter(product => product.id !== productId)
        },
    }
})

export const { addProductToCart, removeProductToCart } = cartSlice.actions

export default cartSlice.reducer