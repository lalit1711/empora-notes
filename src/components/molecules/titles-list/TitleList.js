import React from "react";
import { useSelector } from "react-redux";
import NotesTitle from "../../atoms/notes-title";

function TitleList() {
	const list = useSelector(state => state.crud.notes);

	return (
		<div className="title-list container ">
			{list.map(note => (
				<div key={note.id}>
					<NotesTitle {...note} />
				</div>
			))}
		</div>
	);
}

export default TitleList;
