import React from 'react';
import { SiMinutemailer } from 'react-icons/si';

const NewsLetter = () => {
	return (
		<div className="dark:bg-gray-900 container mx-auto px-4 py-6 m-2 flex justify-between  bg-gray-100">

			<div className="flex justify-center items-center ml-3">
				<p><SiMinutemailer className="border-2 p-3 rounded-full text-white	text-6xl border-blue-900 bg-blue-900" /> </p>
				<p className="text-bold m-4">Join the newsletter and read <br /> the new posts first</p>
			</div>

			<div className="flex flex-row justify-center items-center mr-16">
				<div className="bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-600 w-50  p-2 flex items-center border-2	 ">
					<input type="email" name="email" placeholder='Email' className="bg-white dark:bg-gray-900 outline-none text-sm flex-1" />
				</div>
				<button className="border-2 mx-3  dark:border-none  p-2  inline-block font-semibold text-gray-100  bg-blue-800">Subscribe</button>

			</div>

		</div>
	);
};

export default NewsLetter;