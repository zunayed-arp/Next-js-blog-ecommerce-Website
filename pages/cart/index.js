import axios from 'axios';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';


const CartPage = ({ productsData }) => {
	const products = productsData.data

	const { cartDetails, setCartDetails } = useAuth();




	// console.log(cartDetails)


	const cartHandler = (product) => {
		setCartDetails(product)
	}




	// const products = productsData.data
	// console.log(products)
	return (
		<div className="grid justify-center items-center m-10	">



			<table className="table-auto">
				<thead>
					<tr>
						<th className='bg-red-200'>Product Name</th>
						<th className='bg-green-400'>Price</th>
						<th className='bg-purple-200'>Category</th>
						<th className='bg-red-500'>Payment</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product) => {
							return (
								<tr key={product.id}>
									<td className='border bg-blue-300 m-4 p-3'>{product.title}</td>
									<td className='border bg-green-500 m-4 p-3'>{product.price}</td>
									<td className='border bg-purple-300 m-4 p-3'>{product.category}</td>
									<td className='border bg-purple-500 m-4 p-3'>

										<button onClick={() => cartHandler(product)}>Checkout</button>
									</td>
								</tr>
							)
						})
					}

				</tbody>
			</table>

		</div>
	);
};

export default CartPage;


export async function getServerSideProps(context) {
	let res = await fetch("http://localhost:3000/api/shopapi/create", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	let data = await res.json();

	// console.log(data)
	return {
		props: { productsData: data },
	};
}