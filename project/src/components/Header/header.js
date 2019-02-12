import React from 'react';
import Navbar from './navbar-menu/navbar.js';
import './header.css';

export default class Header extends React.Component {
	render() {
		return (
			<header className="header">
				<Navbar />
			</header>
		);
	};
}