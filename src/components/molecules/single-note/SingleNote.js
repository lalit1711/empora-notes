import React from "react";
import { FaPlus } from "react-icons/fa";
import {
	addNote,
	editNote,
	selectedNote
} from "../../../config/redux/reducers/noteCrud";
import { useDispatch, useSelector } from "react-redux";
import NotesForm from "../../atoms/notes-form";
import { getUUID } from "../../../utils/util";

function SingleNote({ id }) {
	const selected = useSelector(state => state.crud.selectedNote);
	const dispatch = useDispatch();

	const submitForm = (title, description) => {
		const note = {
			title,
			description,
			id: !selected ? getUUID() : selected.id
		};
		if (!selected) {
			dispatch(addNote(note));
			addNewNote(note);
		} else dispatch(editNote(note));
	};

	const addNewNote = (note = null) => {
		dispatch(selectedNote(note));
	};

	return (
		<div className="container">
			<div className="add-note-button">
				<button
					className="button is-dark is-outlined"
					onClick={() => addNewNote()}>
					<span className="icon">
						<FaPlus />
					</span>
					<span>Add Note</span>
				</button>
			</div>
			<div className="add-note-area">
				<NotesForm {...selected} submitForm={submitForm} />
			</div>
		</div>
	);
}

export default SingleNote;
