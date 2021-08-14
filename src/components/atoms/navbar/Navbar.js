import React from "react";

function Navbar() {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="navbar-brand">
				<a className="navbar-item" href="https://bulma.io">
					<img
						src="https://s3.eu-west-1.amazonaws.com/boolo.io/company-logo/099567a0-54cc-11eb-8735-6dc77f5f7317-encora-logo.png"
						alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
						width="112"
						height="28"
					/>
				</a>

				<span
					role="button"
					className="navbar-burger"
					aria-label="menu"
					aria-expanded="false">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</span>
			</div>
		</nav>
	);
}

export default Navbar;
