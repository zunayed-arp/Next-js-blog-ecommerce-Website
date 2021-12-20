import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { BsEye } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import penguinImg from '../public/images/Penguin-PNG-Images.png'

const PopularPost = ({ post }) => {
	return (
		<>
			<Link href={`/blog/${post.id}`} >
				<a>
					<div className="rounded overflow-hidden p-4 bg-gray-100 border-2">
						<div className="w-2/6 flex justify-center items-center p-2">
							<Image className="object-scale-down  h-48 w-96 bg-gray-100" src={penguinImg} alt="penguin" />
						</div>
						<div className="">
							<div className="font-bold text-xl mb-2">{post.title.slice(0, 20)}</div>
							<p className="text-gray-700 text-base">
								{post.body?.slice(1, 100)}....
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
				</a>
			</Link>

		</>
	);
};

export default PopularPost;