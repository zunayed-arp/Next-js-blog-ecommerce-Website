import clientPromise from "../../../utils/database";

export default async function handler(req, res) {
	const client = await clientPromise;
	const db = client.db("shops");
	switch (req.method) {
		case "POST":
			const { product } = req.body;
			let newProduct = await db.collection("shops").insertOne(product);
			console.log(newProduct)
			res.json(newProduct);
			break;
		case "GET":
			const products = await db.collection("shops").find({}).toArray();
			res.json({ status: 200, data: products });
			break;
	}
}


















// import ShoppingCart from "../../../models/ShoppingCart";
// import dbConnect from "../../../utils/dbConnect";

// dbConnect();

// export default async (req, res) => {
// 	const { method } = req;

// 	switch (method) {
// 		case 'GET':
// 			try {
// 				const shops = await ShoppingCart.find({});

// 				res.status(200).json({ success: true, data: shops })
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;
// 		case 'POST':
// 			try {
// 				const newShoppingData = await ShoppingCart.create(req.body);

// 				res.status(201).json({ success: true, data: newShoppingData })
// 			} catch (error) {
// 				res.status(400).json({ success: false });
// 			}
// 			break;
// 		default:
// 			res.status(400).json({ success: false });
// 			break;
// 	}
// }


















// import ShoppingCart from "../../../models/ShoppingCart";
// import dbConnect from "../../../utils/dbConnect";



// dbConnect();
// export default async (req, res) => {
// 	const { method } = req;

// 	switch (method) {
// 		case 'GET':
// 			try {
// 				const shops = await ShoppingCart.find({});
// 				res.status(200).json({ success: true, data: shops })
// 			} catch (error) {
// 				res.status(400).json({ success: false })
// 			}
// 			break;
// 		case 'POST':
// 			try {
// 				const shop = await ShoppingCart.create(req.body);
// 				res.status(201).json({ success: true, data: shop });
// 			} catch (error) {
// 				res.status(400).json({ success: false })
// 			}
// 			break;
// 		default:
// 			res.status(400).json({ success: false });
// 			break;
// 	}

// }