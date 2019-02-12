import React, { Component } from 'react';
import './app.css';

import Header from '../Header/header.js';
import Content from '../main_components/content.js';

export default class App extends Component {


	render() {
		return (
			<div className="app-block">
				<Header />
				<Content />
			</div>
		);
	}
}
