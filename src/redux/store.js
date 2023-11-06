import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";


// Store
const store = configureStore({
    reducer: {
        cart: cartSlice
    },
});

console.log("oncreate store: ", store.getState());


// Subscribe
store.subscribe(() => {
    console.log("store change: ", store.getState());
});

export default store;
