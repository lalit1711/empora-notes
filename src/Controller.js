import React from "react";
import { useSelector } from "react-redux";
import Login from "./pages/login";
import Notes from "./pages/notes";

function Controller() {
	const isLogin = useSelector(state => state.crud.isLogIn);
	return <div>{isLogin ? <Notes /> : <Login />}</div>;
}

export default Controller;
