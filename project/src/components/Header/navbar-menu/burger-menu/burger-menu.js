import React from 'react';
import './burger-menu.css';
import Menu from '../menu/menu.js';

export default class Burger extends React.Component {

	state = {
		display: false
	}

	toggleMenu = () => {
		this.setState(({display}) => {
			let toggleDisplay = !display;
			return {
				display: toggleDisplay
			}
		});
	}

	render() {
		const { display } = this.state;
		let style = {display: 'block'};
		if(display) {
			style.display = 'none'
		}
		return (
			<div className="burger-block">
				<input onClick={this.toggleMenu} type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" />
		        <label htmlFor="checkbox3">
		            <div className="hamburger hamburger3">
		                <span className="bar bar1"></span>
		                <span className="bar bar2"></span>
		                <span className="bar bar3"></span>
		                <span className="bar bar4"></span>
		            </div>
		        </label>
				<Menu display={this.state.display} />
			</div>
		);
	};
}