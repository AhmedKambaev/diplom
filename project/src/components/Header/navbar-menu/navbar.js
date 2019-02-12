import React from 'react';
import './navbar.css';
import Img from './images/logotype.png';
import Menu from './menu/menu.js';
import Burger from './burger-menu/burger-menu.js';

export default class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar-menu">
				<div className="container container-menu">
					<div className="logo-block">
						<a href="/" className="logotype">
							<img alt="logotype" className="logotype-img" src={Img} />
						</a>
						<div className="border-one"></div>
						<div className="border-two"></div>
						<div className="border-three"></div>
						<div className="border-four"></div>
					</div>
					<div className="block-menu">
						<Menu />
					</div>
					<Burger />
				</div>
			</nav>
		);
	};
}