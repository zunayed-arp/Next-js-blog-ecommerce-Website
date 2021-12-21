import { connect } from "../../../utils/database";






export default async function (req, res) {
console.log(req.body)
res.json({})
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