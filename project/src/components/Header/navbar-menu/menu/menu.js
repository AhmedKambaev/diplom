import React from 'react';
import './menu.css';

export default class Menu extends React.Component {

	render() {
		const { display } = this.props;
		if(display === false) {
			return 0;
		}
		return (
			<div className="menu">
				<ul className="list-items d-flex">
					<li className="item">
						<a href="/" className="link">
							Главная
						</a>
					</li>
					<li className="item">
						<a href="/" className="link">
							Технология
						</a>
					</li>
					<li className="item">
						<a href="/" className="link">
							График полётов
						</a>
					</li>
					<li className="item">
						<a href="/" className="link">
							Гарантии
						</a>
					</li>
					<li className="item">
						<a href="/" className="link">
							О компании
						</a>
					</li>
					<li className="item">
						<a href="/" className="link">
							Контакты
						</a>
					</li>
				</ul>
			</div>
		);
	}
};