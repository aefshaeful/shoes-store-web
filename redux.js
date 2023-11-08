import { legacy_createStore } from "redux";

// Reducer = fungsi yang menerima 2 parameter (state, action) dan mengembalikan state.
// Reducer = untuk mengubah state.
// action.type = nama action
// action.payload = data yang dikirim
const cardReducer = (
    state = {
        //login: false,
        cards: []
    }, 
    action
    ) => {
        switch (action.type) {
            case 'ADD_TO_CARD':
                return {
                    ...state,
                    cards: [...state.cards, action.payload]
                };
            // case 'LOGIN':
            //     return {
            //         ...state,
            //         login: true
            //     };
            default:
                return state;
        }
}


// Store = tempat menyimpan state.
const store = legacy_createStore(cardReducer);
console.log("oncreate store: ", store.getState());


// Subscribe = untuk melihat perubahan state.
store.subscribe(() => {
    console.log("store change: ", store.getState());
});


// Dispatch
// Dispatch = mengirim action ke reducer, untuk menjalankan fungsi yang ada di reducer.
const action1 ={ type: 'ADD_TO_CARD', payload: {id: 1, name: 'Baju', price: 10000}};
store.dispatch(action1);
const action2 ={ type: 'ADD_TO_CARD', payload: {id: 2, name: 'Celana', price: 20000}};
store.dispatch(action2);

