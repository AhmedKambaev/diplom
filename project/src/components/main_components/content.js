import React from 'react';
import './content.css';
import Title from './text-component/title.js';
import Button from './button-component/button.js';
import Carts from './carts-component/carts.js';

export default class Content extends React.Component {

	render() {
		return (
			<div className="container main-content">
				<div className="initial-block-title">
					<Title />
					<Button />
				</div>
				<div className="initial-block-carts">
					<Carts />
				</div>
			</div>
		);
	};
}