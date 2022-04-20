import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/configureStore";
import './index.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
	<React.StrictMode>
		{/* ❓ redux store initilization */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	rootElement
);