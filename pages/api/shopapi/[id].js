export default async function handler(req, res) {
	const { id } = req.query
	console.log(id)
	res.end(`Post: ${id}`)
}