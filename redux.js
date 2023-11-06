import { legacy_createStore } from "redux";

// Reducer
// action.type = nama action
// action.payload = data yang dikirim
const cardReducer = (
    state = {
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
            default:
                return state;
        }

}
// Store
const store = legacy_createStore(cardReducer);
console.log("oncreate store: ", store.getState());

// Subscribe
store.subscribe(() => {
    console.log("store change: ", store.getState());
});


// Dispatch
// Dispatch = mengirim action ke reducer, untuk menjalankan fungsi yang ada di reducer.
const action1 ={ type: 'ADD_TO_CARD', payload: {id: 1, name: 'Baju', price: 10000}};
store.dispatch(action1);
const action2 ={ type: 'ADD_TO_CARD', payload: {id: 2, name: 'Celana', price: 20000}};
store.dispatch(action2);
