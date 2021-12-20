import React, { useEffect, useState } from 'react';
import { BsMoonFill, BsFillSunFill, BsSearch } from 'react-icons/bs';
import { MdGpsNotFixed, MdOutlineAttachEmail } from 'react-icons/md';
import { FaShoppingCart } from 'react-icons/fa';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';
import { IoIosArrowDown } from 'react-icons/io'
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useAuth } from '../hooks/useAuth';

const Navigation = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { contexts } = useAuth();
	const { user } = contexts;



	useEffect(() => {
		setMounted(true)
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;

		if (currentTheme === 'dark') {
			return (
				<BsFillSunFill className="w-7 h-7" role="button" onClick={() => setTheme('light')} />
			)
		}
		else {
			return (
				<BsMoonFill className="w-7 h-7" role="button" onClick={() => setTheme('dark')} />
			)
		}
	}





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

						<div className="bg-gray-50 dark:bg-gray-700 dark:border-2 dark:border-gray-400  w-30 p-2 flex items-center border"><BsSearch className="text-gray-300  dark:bg-gray-700 text-2xl  mr-2 " />
							<input type="password" name="email" placeholder='Search' className="bg-gray-50 dark:bg-gray-700 outline-none text-sm flex-1" />
						</div>

						<div className='grid grid-cols-4 gap-3 mt-2 justify-center items-center'>
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
								<li
									className="lg:inline-flex lg:w-auto w-1/6 p-1 rounded text-gray-400 items-center justify-center hover:bg-gray-500 hover:text-white">
									{renderThemeChanger()}
								</li>
							</ul>
						

						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navigation;