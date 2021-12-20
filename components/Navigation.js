import React from 'react';
import { BsMoonFill, BsFillSunFill, BsSearch } from 'react-icons/bs';
import { MdGpsNotFixed, MdOutlineAttachEmail } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link';

const Navigation = () => {
	return (
		<>

			<div>

				<div className="bg-gray-100 dark:bg-gray-700 border-t-2  text-black px-2 lg:px-8 flex justify-between">
					{/**category section */}
					<div className='flex justify-center items-center'>
						<div className="flex justify-center items-center mr-8">
							<p><MdGpsNotFixed className="text-3xl border rounded-full border-blue-900 bg-blue-900 text-white m-2" /></p>
							<p className="text-3xl font-bold">Atlas</p>
						</div>
						<div >
							<ul className='grid grid-cols-4 gap-4 justify-center items-center'>
								<Link href="/blog">
									<a className='flex justify-center items-center'>Blog</a>
								</Link>
								<li className='m-2'>About</li>
								<li>Contact </li>
							</ul>
						</div>
					</div>

					{/**search and social section */}
					<div className='grid grid-cols-2 gap-8'>

						<div className="bg-gray-50 dark:bg-gray-700 dark:border-2 dark:border-gray-400  w-30 p-2 flex items-center border"><BsSearch className="text-gray-100  dark:bg-gray-700 text-2xl  mr-2 " />
							<input type="password" name="email" placeholder='Search' className="bg-gray-50 dark:bg-gray-700 outline-none text-sm flex-1" />
						</div>

						<div className='grid grid-cols-4 gap-3 mt-2'>
							<ul>
								<a href="#"><FiTwitter /></a>
							</ul>
							<ul>
								<a href="#"><AiFillFacebook /></a>
							</ul>
							<ul>
								<a href="#"><AiFillYoutube /></a>
							</ul>
							<ul>
								<a href="#"><FiInstagram /></a>
							</ul>
						</div>
					</div>
				</div>
			</div>












			{/* 
			<header className="flex items-center bg-gray-100 dark:bg-gray-900 p-3 flex-wrap">


				<a href="#" className="p-2 mr-4 inline-flex items-center">

					<span className="text-xl text-black dark:text-white font-bold uppercase tracking-wide"
					>Talwind CSS</span>
				</a>

				<button
					className="text-black dark:bg-gray-500 inline-flex p-3 hover:bg-gray-500 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
					data-target="#navigation"
				>
					<i className="material-icons">menu</i>
				</button>
				<div
					className=" hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
					id="navigation"
				>

					<div
						className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto"
					>

						<div className="bg-gray-100 dark:bg-gray-700 dark:border-2 dark:border-gray-400  w-64 p-2 flex items-center border-2	 "><BsSearch className="text-gray-400  dark:bg-gray-700  mr-2 " />
							<input type="password" name="password" placeholder='Password' className="bg-gray-100 dark:bg-gray-700 outline-none text-sm flex-1" />
						</div>

						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-500 dark:text-gray-100 hover:text-white"
						>
							<span>Home</span>
						</a>
						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-500 hover:text-white  font-bold dark:text-gray-100"
						>
							<span>About</span>
						</a>
						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-500 hover:text-white dark:text-gray-100"
						>
							<span>Services</span>
						</a>
						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center dark:hove:text-white hover:bg-gray-500 hover:text-white dark:text-gray-100"
						>
							<FaShoppingCart />
						</a>
						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-500 hover:text-white dark:text-gray-100"
						>
							<span>Products</span>
						</a>
						<a
							href="#"
							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:bg-gray-500 hover:text-white dark:text-gray-100"
						>
							<span>Contact Us</span>
						</a>

						<p

							className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-500 hover:text-white"
						>

						</p>
					</div>
				</div>

			</header> */}


		</>
	);
};

export default Navigation;