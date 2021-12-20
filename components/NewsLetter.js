import React from 'react';
import { SiMinutemailer } from 'react-icons/si';

const NewsLetter = () => {
	return (
		<div className="container mx-auto px-4 py-6 m-2 flex justify-between ">

			<div>
				<SiMinutemailer/>
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