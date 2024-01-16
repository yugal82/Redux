import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: [{ id: 1, text: "Task 1" }],
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
            const todosAfterDelete = state.todos.filter(todo => todo.id !== action.payload.id)
            state.todos = todosAfterDelete;
        },
        editTask: (state, action) => {
            const todoToEdit = state.todos.filter(todo => todo.id === action.payload.id)

            todoToEdit.text = action.payload.text;

        },
    }
});

export const todoActions = todoSlice.actions;
export default todoSlice;
