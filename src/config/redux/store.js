import { configureStore } from "@reduxjs/toolkit";
import noteCrud from "./reducers/noteCrud";

export default configureStore({
	reducer: {
		crud: noteCrud
	}
});
