import { createSlice } from "@reduxjs/toolkit";

// Reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: JSON.parse(localStorage.getItem('cart')) || [], // Menampilkan data cart dari local storage
    },
    reducers: {
        // addToCart merupakan nama action, untuk memasukkan data state(cart) ke store.
        addToCart: (state, action) => {
            const checkItem = state.data.find((item) => item.id === action.payload.id);
            if (checkItem) {
                checkItem.qty++;
            } else {
                state.data.push(action.payload);
            }
        }
    }
});

export const { addToCart} = cartSlice.actions;
export default cartSlice.reducer;