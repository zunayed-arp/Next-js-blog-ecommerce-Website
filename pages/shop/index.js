import React from 'react';
import ProductDisplay from '../../components/ProductDisplay';

const ShopContainer = ({ products }) => {
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
							<ProductDisplay key={product.id} product={product}/>

							
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

	console.log(data)

	return {
		props: {
			products: data
		}
	}

}