import { Provider } from "react-redux";
import Navbar from "./components/atoms/navbar";
import store from "./config/redux/store";
import Controller from "./Controller";
import "./styles/main.scss";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Navbar />
				<Controller />
			</div>
		</Provider>
	);
}

export default App;
