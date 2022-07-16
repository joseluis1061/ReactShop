import React from 'react';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import {OrderItem} from '@components/OrderItem';
import '../styles/MyOrder.scss';

export const MyOrder = () => {
	const {state} = useContext(AppContext);
  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src="./icons/flechita.svg" alt="arrow" />
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
					<p>$560.00</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}
