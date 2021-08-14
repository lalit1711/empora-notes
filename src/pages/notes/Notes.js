import React from "react";
import SingleNote from "../../components/molecules/single-note";
import TitleList from "../../components/molecules/titles-list";

function Notes() {
	return (
		<div className="container">
			<div className="columns">
				<div className="column is-4">
					<TitleList />
				</div>
				<div className="column">
					<SingleNote />
				</div>
			</div>
		</div>
	);
}

export default Notes;
