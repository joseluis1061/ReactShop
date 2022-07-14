import React from 'react';
import { useEffect, useState } from 'react';
import {ProductItem} from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () =>{
    const response = await axios(API);
    setProducts(response.data);
  };


  return (
    <section className="main-container">
			<div className="ProductList">
				{products.map((product, id)=>					
					<ProductItem key = {id}/>
				)}
			</div>
		</section>
	);
}
