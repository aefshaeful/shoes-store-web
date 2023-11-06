/* eslint-disable no-unused-vars */
import toolkit from "@reduxjs/toolkit";

const { configureStore, createSlice } = toolkit;

// Reducer 
const cardSlice = createSlice({
    name: 'card',
    initialState: [],
    reducers: {
        addToCard: (state, action) => {
            state.push(action.payload);
        },
    },
});

const loginSlice = createSlice({
    name: 'login',
    initialState: { status: false },
    reducers: {
        login: (state, action) => {
            state.status = true;
        },
    },
});


// Store
const store = configureStore({
    reducer: {
        cards: cardSlice.reducer,
        login: loginSlice.reducer,
    },
});

console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("store change: ", store.getState());
});

// Dispatch
store.dispatch(cardSlice.actions.addToCard(
    {
        id: 1, name: 'Baju', price: 10000
    }
));

store.dispatch(cardSlice.actions.addToCard(
    {
        id: 2, name: 'Celana', price: 20000
    }
));

store.dispatch(loginSlice.actions.login());