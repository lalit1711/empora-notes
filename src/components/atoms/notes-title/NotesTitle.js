import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteNote,
	selectedNote
} from "../../../config/redux/reducers/noteCrud";

function NotesTitle({ id = null, title = "", description = "" }) {
	const dispatch = useDispatch();
	const selected = useSelector(state => state.crud.selectedNote);

	const deleteNoteHandler = () => {
		dispatch(selectedNote(null));
		dispatch(deleteNote(id));
	};

	const setSelectedNote = () => {
		dispatch(selectedNote({ id, title, description }));
	};

	return (
		<div className="tile ">
			<div className="tile ">
				<div
					className={`tile is-child box ${
						selected && selected.id === id && "notification is-primary"
					}`}>
					<span onClick={deleteNoteHandler}>
						<AiOutlineClose />
					</span>
					<div onClick={setSelectedNote}>
						<p className="subtitle has-text-weight-bold">{title} </p>

						<p className="note-title-description is-size-7">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotesTitle;
