import Image from "next/image";
import Link from "next/link";
import NextLink from "next/link";
import { BsEye } from 'react-icons/bs';
import {BiComment} from 'react-icons/bi';



const SingleBlog = ({ post }) => {
	return (
		<>


			<div>
				<div className="rounded overflow-hidden p-4 bg-gray-100">
					<img className="object-cover h-48 w-96 bg-gray-100" src={post.urlToImage} alt={post.title} />
					<div className="">
						<div className="font-bold text-xl mb-2">{post.title.slice(0,20)}</div>
						<p className="text-gray-700 text-base">
						{post.description?.slice(1,100)}....
						</p>
					</div>
					<div className=" flex flext-start   pt-4 pb-2">
						{/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span><span>3</span>
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
						<span>14,2K</span> */}

						<p className="flex flex-row   "><BiComment className="mt-1 font-bold" />  <span className="ml-1" > 3</span></p>
						<p className="flex felx-row mx-4"><BsEye className="mt-1 font-bold" /> <span className="ml-1">14,2K</span></p>
					</div>
				</div>

			</div>




			{/* <div className=" container mx-auto px-4 grid grid-cols-3">


				<div>
					<img src={post.urlToImage} alt="" />
					<h6>by {post.author}</h6>
					<h2>{post.title}</h2>
					<p>{post.description}</p>
					<p> <Link href={post.url}><a>News Source</a></Link></p>
				</div> */}









		</>
	);
};

export default SingleBlog;