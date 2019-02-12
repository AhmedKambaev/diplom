import React from 'react';
import './carts.css';

export default class Carts extends React.Component {

	state = {
		cartState: {
			number: 1,
			garant: `50%`,
			date: 2001,
			days: 597
		}
	}


	render() {
		const { cartState } = this.state;
		const { number, garant, days, date } = cartState;
		return (
			<div className="carts-block">
				<div className="cart cart-one">
					<p>мы</p>
					<div className="indicator-cart">{number}</div>
					<p>на рынке</p>
				</div>
				<div className="cart cart-two">
					<p>гарантируем</p>
					<div className="indicator-cart">{garant}</div>
					<p>безопасность</p>
				</div>
				<div className="cart cart-three">
					<p>календарик за</p>
					<div className="indicator-cart">{date}</div>
					<p>в подарок</p>
				</div>
				<div className="cart cart-four">
					<p>путешествие</p>
					<div className="indicator-cart">{days}</div>
					<p>дней</p>
				</div>
			</div>
		);
	};
}