import { createSlice } from "@reduxjs/toolkit";

export const noteCrud = createSlice({
	name: "counter",
	initialState: {
		notes: [],
		selectedNote: null,
		isLogIn: false
	},
	reducers: {
		addNote: (state, action) => {
			state.notes.push(action.payload);
		},
		deleteNote: (state, action) => {
			state.notes = state.notes.filter(o => o.id !== action.payload);
		},
		editNote: (state, action) => {
			state.notes = state.notes.map(o => {
				if (o.id === action.payload.id) return action.payload;
				return o;
			});
		},
		selectedNote: (state, action) => {
			state.selectedNote = action.payload;
		},
		setLogin: (state, action) => {
			state.isLogIn = action.payload;
		}
	}
});

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, editNote, selectedNote, setLogin } =
	noteCrud.actions;

export default noteCrud.reducer;
