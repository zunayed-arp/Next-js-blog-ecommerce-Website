import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";


const useCart = () => {
	

	async function addToCart(product) {
		console.log(product);
		const res = await fetch("http://localhost:3000/api/shopapi/create", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ product: product }),
		});
		const data = await res.json();
		return data.product;
	}

	return { addToCart };
};

export default useCart;