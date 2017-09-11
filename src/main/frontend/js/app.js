"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
// import {box} from 'box';

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello! Reactjs TTT WEBPACK SHIT!!</h1>
				<h2>HI MOTHERFUCKER</h2>
			</div>
		)
	}
}

ReactDOM.render(
			<div id="root">
				<App/>
			</div>
			, document.querySelector("body"));

export default App;
