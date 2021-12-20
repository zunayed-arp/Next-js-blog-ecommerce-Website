import Image from 'next/image';
import React from 'react';
import SingleBlog from './single_blog';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

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
							<SingleBlog key={post.title} post={post} />
						)
					})
				}
			</div>
		</>
	);
};

export default BlogContainer;

export const getStaticProps = async () => {
	const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a0622c41f629462e9922301fffcdf6c6`)
	const data = await res.json()

	// console.log(data.articles)

	return {
		props: {
			posts: data.articles
		}
	}

}