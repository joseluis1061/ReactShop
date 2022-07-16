import React from 'react';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import {OrderItem} from '@components/OrderItem';
import flechita from '@icons/flechita.svg';
import '../styles/MyOrder.scss';

export const MyOrder = () => {
	const {state} = useContext(AppContext);

	const sumTotal = ()=>{
		const sum = state.cart.reduce(
			(acumulator, currentValue) =>
			acumulator + currentValue.price, 0
		);		
		return sum;
	}

  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product)=>
					<OrderItem
						key = {`order-item-${product.id}`}
						product={product}
					/>
				)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}
