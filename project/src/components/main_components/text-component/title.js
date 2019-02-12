import React, { Component } from 'react';
import './title.css';

export default class Title extends Component {


	render() {
		return (
			<div className="title-block">
				<h1 className="title">Путешествие</h1>
				<h2 className="title-info">На красную планету</h2>
			</div>
		);
	}
}
