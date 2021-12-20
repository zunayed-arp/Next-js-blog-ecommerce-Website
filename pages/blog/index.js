import Image from 'next/image';
import React from 'react';
import SingleBlog from './single_blog';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import BlogHomePage from '../../components/BlogHomePage';

const BlogContainer = ({ posts }) => {
	return (
		<>
			<div className="container mx-auto px-4 m-2 flex justify-between ">
				<h1 className="text-2xl">Featured Posts</h1>
				<h1 className=" flex flex-row justify-end "> <AiOutlineArrowLeft className='mt-1 opacity-25' /> <AiOutlineArrowRight className='mt-1' /> </h1>
			</div>

			<div className="grid grid-cols-3 xs:grid-cols-1 gap-4 container mx-auto px-4 xs:grid-cols-1 dark:bg-gray-900 	">

				{
					posts.map((post) => {
						return (
							<>
								<SingleBlog key={post.id} post={post} />
							</>
						)
					})
				}
			</div>
		</>
	);
};

export default BlogContainer;

export const getStaticProps = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
	const data = await res.json()

	console.log(data)

	return {
		props: {
			posts: data
		}
	}

}


