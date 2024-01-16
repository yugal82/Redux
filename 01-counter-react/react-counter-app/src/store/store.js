import { createStore } from "redux";

const INITIAL_VALUE = {
    counter: 0,
    name: 'Yugal Khanter'
}

// create reducer
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if(action.type === 'INCREMENT'){
        newStore = {...store, counter: store.counter +1};
    } else if(action.type === 'DECREMENT'){
        newStore = {...store, counter: store.counter -1};
    } else if (action.type === 'CHANGE_NAME'){
        newStore = {...store, name: action.payload};
    }

    return newStore;
}

// create store
const counterStore = createStore(reducer);

export default counterStore;