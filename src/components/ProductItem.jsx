import React from 'react';
import { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';

export const ProductItem = ({product}) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = (item) => {
		addToCart(item);
	};
  return (
    <div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src={addToCartImage} alt="add to cart icon" />
				</figure>
			</div>
		</div>
	);
}
