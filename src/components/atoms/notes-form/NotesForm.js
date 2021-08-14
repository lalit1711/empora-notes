import React, { useEffect, useState } from "react";

function NotesForm({ title = "", description = "", submitForm }) {
	const [lTitle, setTitle] = useState("");
	const [lDescription, setDescription] = useState("");

	useEffect(() => {
		setTitle(title);
		setDescription(description);
	}, [title, description]);

	const hasError = () => {
		if (lTitle.trim() === "" || lDescription.trim() === "") return true;
		return false;
	};

	const handleSaveClick = () => {
		submitForm(lTitle, lDescription);
	};

	return (
		<div>
			<div className="field">
				<label className="label">Title</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Enter note title"
						value={lTitle}
						onChange={e => setTitle(e.target.value)}
					/>
				</div>
			</div>
			<div className="field">
				<label className="label">Body</label>
				<div className="control">
					<textarea
						className="textarea"
						placeholder="Enter Description"
						row={10}
						value={lDescription}
						onChange={e => setDescription(e.target.value)}></textarea>
				</div>
			</div>
			<div className="field add-note-button">
				<div className="control">
					<button
						className="button is-link"
						disabled={hasError()}
						onClick={handleSaveClick}>
						Save
					</button>
				</div>
			</div>
		</div>
	);
}

export default NotesForm;
