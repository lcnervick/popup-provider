import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

export const addBook = createAction('books/addBook');
const booksReducer = createReducer([], builder => {
	builder
		.addCase(addBook, (state, action) => {
			const newBook = {
				title: action.payload.title,
				author: action.payload.author
			};
			
			state.push(newBook);
		});
});

const store = configureStore({
	reducer: {
		books: booksReducer
	},
	devTools: true
});

export default store;
