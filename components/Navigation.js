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
	const { user, logOut } = contexts;

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

				<div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100  text-black px-2 lg:px-8 flex justify-between">
					{/**category section */}
					<div className='flex justify-center items-center'>
						<Link href="/">
							<a>
								<div className="flex justify-center items-center mr-8">
									<p><MdGpsNotFixed className="text-3xl border rounded-full border-blue-900 bg-blue-900 text-white m-2" /></p>
									<p className="text-3xl font-bold">Atlas</p>
								</div>
							</a>
						</Link>
						<div >
							<ul className='grid grid-cols-6 gap-1 justify-center items-center'>
								<Link href="/blog">
									<a >Blog</a>
								</Link>
								<Link href="/login">
									<a >login</a>
								</Link>
								<Link href="/shop">
									<a >Shop</a>
								</Link>
								<Link href="/cart">
									<a >Cart</a>
								</Link>
								<li className='m-2'>About</li>
								<li>Contact </li>
							</ul>
						</div>
					</div>

					{/**search and social section */}
					<div className='grid grid-cols-2 gap-8'>

						<div className="bg-gray-50 dark:bg-gray-900 dark:border dark:border-gray-700  w-25  flex items-center border"><BsSearch className="text-gray-300 ml-2	 dark:bg-gray-900 text-4xl" />
							<input type="password" name="email" placeholder='    Search' className="bg-gray-50 dark:bg-gray-900 outline-none text-sm flex-1" />
						</div>

						<div className='grid grid-cols-4 gap-3 mt-2 justify-center items-center'>
							<ul>
								{/* <Link href="/cart">
									<a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
										<div className="relative">
											<FaShoppingCart className="w-7 h-7 flex-shrink-0" />
										</div>
										<p className="text-lg">
											{formatCurrency(totalPrice)}{' '}
											<span className="text-sm text-gray-500">({cartCount})</span>
										</p>
									</a>
								</Link> */}
							</ul>
							<ul>
								<a href="#"><AiFillFacebook /></a>
							</ul>
							<ul>
								{
									user?.displayName ? <button onClick={logOut}>Logout</button> : <ul>
										<a href="#"><AiFillFacebook /></a>
									</ul>
								}
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