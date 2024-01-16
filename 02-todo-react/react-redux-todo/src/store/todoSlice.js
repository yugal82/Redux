import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addTaks: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
        },
        editTask: (state, action) => {
            const todoToEdit = state.todos.filter(todo => todo.id === action.payload.id)
            todoToEdit.text = action.payload.text;
        },
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice;
