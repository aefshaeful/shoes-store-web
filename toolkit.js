/* eslint-disable no-unused-vars */
import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

// Reducer
const addToCard = createAction("ADD_TO_CARD");

const cardReducer = createReducer( [], (builder) => {
    builder.addCase(addToCard, (state, action) => {
        state.push(action.payload);
    });
})

const login = createAction("LOGIN");

const loginReducer = createReducer( {status : false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    })
   
})

// Store
const store = configureStore({
    reducer: {
        cards: cardReducer,
        login: loginReducer
    },    
});

console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("store change: ", store.getState());
});

// Dispatch
store.dispatch(addToCard(
    {
        id: 1, name: 'Baju', price: 10000
    }
));
store.dispatch(addToCard(
    {
        id: 2, name: 'Celana', price: 20000
    }
));
store.dispatch(login());


