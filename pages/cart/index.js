import axios from 'axios';
import Link from 'next/link';
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
		<div key={'d43fgdgdi'} className="grid justify-center items-center m-10	">



			<table className="table-auto dark:bg-gray-900">
				<thead>
					<tr>
						<th className='bg-red-200 dark:bg-gray-900'>Product Name</th>
						<th className='bg-green-400 dark:bg-gray-900'>Price</th>
						<th className='bg-purple-200 dark:bg-gray-900'>Category</th>
						<th className='bg-red-500 dark:bg-gray-900'>Payment</th>
					</tr>
				</thead>
				<tbody>
					{
						products.map((product) => {
							return (
								<tr key={product.id}>
									<td key={product.id} className='border bg-blue-300 m-4 p-3 dark:bg-gray-900'>{product.title}</td>
									<td key={product.id} className='border bg-green-500 m-4 p-3 dark:bg-gray-900'>{product.price}</td>
									<td key={product.id} className='border bg-purple-300 m-4 p-3 dark:bg-gray-900'>{product.category}</td>
									<Link href="/stripepay">
										<a>
											<td key={product.id} className='border bg-purple-500 m-4 p-3 dark:bg-gray-900'>

												<button onClick={() => cartHandler(product)}>Checkout</button>
											</td>
										</a>
									</Link>
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