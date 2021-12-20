import Image from 'next/image';
import React from 'react';
import natureImg from '../../public/images/nature.jpeg';

const BlogDetail = ({ blog }) => {
	const { id, title, body } = blog;
	return (
		<>

			<div className="rounded overflow-hidden shadow-lg grid justify-center items-center">
				<Image className="w-full" src={natureImg} alt="River" />
				<div className="px-6 py-4">
					<div className="font-bold text-xl mb-2">{title}</div>
					<p className="text-gray-700 text-base">
						{body}
					</p>
				</div>
				<div className="px-6 pt-4 pb-2">
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
				</div>
			</div>

		</>
	);
};




export const getStaticProps = async (context) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
	const blog = await res.json()

	// console.log(blog)

	return {
		props: {
			blog: blog
		}
	}
}


export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const blogs = await res.json()

	const ids = blogs.map(blog => blog.id)
	const paths = ids.map(id => ({ params: { id: id.toString() } }))

	return {
		paths,
		fallback: false
	}
}

export default BlogDetail;




