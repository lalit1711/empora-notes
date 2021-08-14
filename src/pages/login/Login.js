import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLogin } from "../../config/redux/reducers/noteCrud";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const dispatch = useDispatch();

	const handleSubmit = e => {
		e.preventDefault();
		if (username.trim() === "admin@admin.com" && password.trim() === "admin")
			dispatch(setLogin(true));
		else setErrorMessage("Wrong email or password");
	};
	return (
		<div className={`modal is-active sign-up-log-in `}>
			<div
				style={{ backgroundColor: "#d5ead5" }}
				className="modal-background"></div>
			<div className="modal-content">
				<div className="columns is-mobile">
					<div className="column is-three-fifths is-offset-one-fifth container">
						<figure className="image">
							<img
								src={
									"https://www.encora.com/hubfs/Website_Assets/brand/encora-logo.svg"
								}
								alt="logo"
								style={{
									height: "120px",
									width: "200px"
								}}
							/>
						</figure>
						<div className="form-container">
							<form onSubmit={handleSubmit}>
								<div className="field">
									<label className="label">Email</label>
									<div className="control">
										<input
											className="input"
											style={{ backgroundColor: "#d5ead5" }}
											type="email"
											placeholder="Enter your email"
											value={username}
											onChange={e => setUsername(e.target.value)}
										/>
									</div>
								</div>
								<div className="field">
									<label className="label">Password</label>
									<div className="control">
										<input
											style={{ backgroundColor: "#d5ead5" }}
											className="input"
											type="password"
											placeholder="Enter your password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
								</div>
								{errorMessage && (
									<p className="is-help has-text-danger">{errorMessage}</p>
								)}
								<br />
								<div className="actions">
									<button className="button is-primary">Log In</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
