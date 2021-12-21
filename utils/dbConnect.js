import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
	if (connection.isConnected) {
		return;
	}

	const db = await mongoose.connect(process.env.DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;













// import mongoose from "mongoose";



// const connection = {};

// const dbConnect = async () => {
// 	if (connection.isConnected) {
// 		console.log('already Connected');
// 		return;
// 	}

// 	const db = await mongoose.connect(process.env.MONGO_URI, {
// 		useNewUrlParser: true,
// 		useUnifiedTopology: true,
// 	})



// 	connection.isConnected = db.connections[0].readyState;
// 	console.log(connection.isConnected)


	// if(Mongoose.connection.length > 0){
	// 	connection.isConnected = Mongoose.connections[0].readyState;
	// 	if(connection.isConnected ===1){
	// 		console.log('use previous connection')
	// 		return
	// 	}
	// 	await Mongoose.disconnect();
	// }
	// const db = await Mongoose.connect(process.env.MONGODB_URI, {
	// 	useNewUrlParser: true,
	// 	useUnifiedTopology: true,
	// });
	// console.log('new connection');
	// connection.isConnected = db.connections[0].readyState;
// }

// export default dbConnect;




// id: 3,
// 	title: 'Mens Cotton Jacket',
// 		price: 55.99,
// 			description: 'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
// 				category: "men's clothing",
// 					image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
// 						rating: { rate: 4.7, count: 500 }




// {
// 	"title": "Mens Cotton Jacket",
// 		"price": 120,
// 			"category": "men's clothing",
// 				"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
// 					"rating": 4.5,
// 						"numReviews": 120,
// 							"description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day."

// }