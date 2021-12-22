import Image from 'next/image';
import React from 'react';
import heroImg from '../public/images/plants/alocasia-zebrina.png';

const HeroSection = () => {
	return (
		<div className=" container-sm flex dark:bg-gray-800 bg-gray-100 h-auto">
			<div className=" w-3/5 my-10 ">
				<div className="flex items-center justify-center">
					<div className="ml-16">
						<h6 className="text-blue-800">WELCOME TO MY BLOG</h6>
						<h1 className="text-5xl font-bold dark:text-white text-black">We all owe <br />death a life</h1>
						<p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet.
						</p>
					</div>
				</div>

				<div className="flex flex-row justify-center items-center mr-16">
					<div className="bg-white dark:bg-gray-900 dark:border-2 dark:border-gray-600 w-50  p-2 flex items-center border-2	 ">
						<input type="email" name="email" placeholder='Email' className="bg-white dark:bg-gray-900 outline-none text-sm flex-1" />
					</div>
					<button className="border-2 mx-3  dark:border-none  p-2  inline-block font-semibold text-gray-100  bg-blue-800">Subscribe</button>

				</div>
			</div>

			<div className=" w-2/5 ">
				<Image src={heroImg}
					alt="image-png"
					width={1000}
					height={600}
					layout="responsive"
				/>

			</div>

		</div>
	);
};

export default HeroSection;