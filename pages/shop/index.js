import { responseSymbol } from 'next/dist/server/web/spec-compliant/fetch-event';
import React from 'react';
import ProductDisplay from '../../components/ProductDisplay';

const ShopContainer = ({ products }) => {


	// async function addToCart(product) {
	// 	console.log(product);
	// 	const res = await fetch("/api/shopapi/create", {
	// 		method: "POST",
	// 		headers: {
	// 			"Content-Type": "application/json"
	// 		},
	// 		body: JSON.stringify({ product: product }),
	// 	});
	// 	const data = await res.json();
	// 	return data.product;
	// }






	return (
		<>
			<div className="container mx-auto px-4 py-6 m-2 flex justify-between ">
				<h1 className="text-2xl">All Products</h1>
				{/* <h1 className=" flex flex-row justify-end border p-3 "> See All </h1> */}
			</div>
			<div className="grid grid-cols-4  xs:grid-cols-1 gap-4 container mx-auto px-4 xs:grid-cols-1 dark:bg-gray-900 	">

				{

					products.map((product) => {
						return (
							<ProductDisplay key={product.id} product={product}  />


						)
					})
				}
			</div>
		</>
	);
};

export default ShopContainer;




export const getStaticProps = async () => {
	const res = await fetch(`https://fakestoreapi.com/products`)
	const data = await res.json()

	// console.log(data)

	return {
		props: {
			products: data
		}
	}

}