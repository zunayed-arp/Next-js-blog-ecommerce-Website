import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdRateReview } from 'react-icons/md';

const ProductDetail = ({ product }) => {
	const { id, title, price, description, category, image, rating } = product
	return (
		<div className="grid grid-cols-2 gap-4">
			<div>
				<Image
					src={image}
					alt={title}
					width={500}
					height={600}
					layout="responsive"
				></Image>
			</div>

			<div className="bg-blue-200 border rounded p-4 ">
				<h1 className='text-center font-bold bg-slate-400 rounded-full p-3 text-2xl '>Product Details</h1>
				<h1 className="font-bold m-2 border rounded bg-blue-300 p-2">{title}</h1>
				<h2 className="text-black m-2  border rounded bg-blue-300 p-2"><span className='font-bold'>Price:</span> ${price}</h2>
				<h3 className="font-bold m-2 border rounded bg-blue-300 p-2"><span className="font-bold">Category:</span> {category}</h3>
				<h3 className="m-2 border rounded bg-blue-300 p-2"><span className="font-bold">Description:</span> {description}</h3>
				<p className="m-2 border rounded bg-blue-300 p-2"><span className="font-bold">Rating:</span> {rating.rate} <span>({rating.count} Reviews)</span> </p>
				<div className="flex justify-around items-center	">
					<Link href={`/`}>
						<a>	<button className="bg-blue-500 ml-8 dark:bg-gray-700 font-bold text-white  dark:text-gray-100 border rounded p-3" >Back To Home</button></a>
					</Link>
					<Link href={`/shop/cart`}>
						<a>
							<button className="bg-blue-600 dark:bg-gray-700 font-bold text-white  dark:text-gray-100 border rounded p-3">Add To Cart</button>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};




export const getStaticProps = async (context) => {
	const res = await fetch(`https://fakestoreapi.com/products/${context.params.id}`)
	const data = await res.json()

	// console.log(blog)

	return {
		props: {
			product: data
		}
	}
}


export const getStaticPaths = async () => {
	const res = await fetch(`https://fakestoreapi.com/products`)
	const products = await res.json()

	const ids = products.map(product => product.id)
	const paths = ids.map(id => ({ params: { id: id.toString() } }))

	return {
		paths,
		fallback: false
	}
}






export default ProductDetail;