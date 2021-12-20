import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsEye } from 'react-icons/bs';
import { BiComment } from 'react-icons/bi';
import penguinImg from '../public/images/Penguin-PNG-Images.png'


const RecentBlogPost = ({ post }) => {
	return (
		<>



			<div className="flex p-3 border ">
				<div className="rounded overflow-hidden px-3 w-2/6  p-4 ">
					<Image className="object-scale-down h-48 w-96" src={penguinImg} alt="penguin" />
				</div>
				<div>
					<div className="">
						<div className="font-bold text-xl mb-2">{post.title.slice(0, 20)}</div>
						<p className="text-gray-700 text-base">
							{post.body?.slice(1, 100)}....
						</p>

						<div className=" flex flext-start   pt-4 pb-2">
							<p className="flex flex-row   "><BiComment className="mt-1 font-bold" />  <span className="ml-1" > 3</span></p>
							<p className="flex felx-row mx-4"><BsEye className="mt-1 font-bold" /> <span className="ml-1">14,2K</span></p>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default RecentBlogPost;