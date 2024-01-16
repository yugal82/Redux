const redux = require('redux');

// flow of redux:
// 1. Whenever any event/action is dispatched, it first goes into reducer.
// 2. Reducer then according to the action makes the necessary updates to the store.
// 3. Reducer performs the following actions and creates a new store and returns it.
// 4. Whenever a new store is returned, the subscribers that are subscribed to the store are notified that the store has been updated, and the UI components update their content according to the new store.

const INITIAL_VALUE = {
    counter: 0
};

// reducer function
// this the place where the states and stores are updated based on the specific action.
const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    if(action.type === 'INCREMENT') {
        newStore = {counter: store.counter + 1}
    } else if (action.type === 'DECREMENT') {
        newStore = {counter: store.counter - 1}
    } else if (action.type === 'ADDITION') {
        newStore = {counter: store.counter + action.payload.number}
    }
    return newStore
}

// create store
// this how we create a new store in redux
const store = redux.createStore(reducer);

// create subscriber
// any UI components can subscribe to the store and display the content according to the store. Whenever the store is updated, the subscribed components will update the content.
const subscriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber);

// type: 'INCREMENT' is the 'action' we are dispatching to make the necessary updates to the store.
// payload: data, is the 'payload' (the data we want to store in the redux store) that we send to the reducer to update the store according to out data.
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'DECREMENT'});
store.dispatch({type: 'ADDITION', payload: {number: 7}});
