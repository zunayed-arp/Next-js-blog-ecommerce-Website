import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductDisplay = ({ product }) => {
	const { id, title, price, description, category, image, rating } = product
	return (
		<>
			<div className=" border rounded">
				<Link href={`/shop/${id}`}>
					<a>
						<div className="border-2">
							<Image src={image}
								width="200px"
								height="220px"
								alt={title}
							></Image>
							<h2>
								{title}
							</h2>
						</div>
					</a>
				</Link>
				<div>
					<div className='border bg-transparent content-center	'>
						<p>Price: {price} </p>
						<p>Rating:{rating.rate} </p>
						<p>{description.slice(0, 30)}</p>
					</div>
					<div className="flex justify-between">
						<Link href={`/shop/${id}`}>
							<a>	<button className="bg-blue-600 dark:bg-gray-700 font-bold text-white  dark:text-gray-100 border rounded p-3" >Deatils</button></a>
						</Link>
						<Link href={`/shop/cart`}>
							<a>
								<button className="bg-blue-600 dark:bg-gray-700 font-bold text-white  dark:text-gray-100 border rounded p-3">Add To Cart</button>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductDisplay;