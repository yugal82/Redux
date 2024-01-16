import {configureStore, createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counterVal: 0},
    reducers: {
        increment: (state) => {
            state.counterVal += 1;
        },
        decrement: (state) => {
            state.counterVal -= 1;
        },
        add: (state, action) => {
            state.counterVal = state.counterVal + action.payload.num;
        },
        subtract: (state, action) => {
            state.counterVal = state.counterVal - action.payload.num;
        }
    }
});

const store = configureStore({reducer: {
    counter: counterSlice.reducer
}})

export const actions = counterSlice.actions
export default store;