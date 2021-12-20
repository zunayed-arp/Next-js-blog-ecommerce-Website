import { MdGpsNotFixed, MdOutlineAttachEmail } from 'react-icons/md';
import { BsArrowRightShort } from 'react-icons/bs';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai';



const Footer = () => {
	return (
		<>
			<footer class="footer-1 bg-gray-100 py-8 sm:py-12">
				<div className=" dark:bg-gray-700 text-black px-6 lg:px-8 py-12">
					<div className="flex justify-between">
						<div className="flex justify-center items-center">
							<p><MdGpsNotFixed className="text-3xl border rounded-full border-blue-900 bg-blue-900 text-white m-2" /></p>
							<p className="text-3xl font-bold">Atlas</p>
						</div>
						<div className="flex justify-center items-center border p-3 bg-gray-100">
							<p >Contact Me </p>
							<span><BsArrowRightShort /></span>
						</div>
					</div>

				</div>

				<div class="container mx-auto px-4 border-t-2">
					<div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
						<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
							<h5 class="text-xl font-bold mb-6">Atlas</h5>
							<ul class="list-none footer-links">
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Homepage</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">About</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Article Page</a>
								</li>

							</ul>
						</div>
						<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
							<h5 class="text-xl font-bold mb-6">Resources</h5>
							<ul class="list-none footer-links">
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
								</li>
								<li class="mb-2">
									<a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
								</li>
							</ul>
						</div>

						<div class="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0 ">
							<div className="flex justify-center items-center">
								<p className="m-4 "><MdOutlineAttachEmail className='border-2 border-blue-500 bg-blue-900 text-white  rounded text-4xl	' /></p>
								<p className='font-bold'>Join the newsletter and read the new posts first</p>
							</div>
							<div className="flex  ">
								<input type="email" placeholder="Email" className='p-2' />
								<button className="border-2 mx-3  dark:border-none  p-2  inline-block font-semibold text-gray-100  bg-blue-800">Subscribe</button>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-gray-100 dark:bg-gray-700 border-t-2  text-black px-2 lg:px-8 flex justify-between">
					<p className='mt-2'> &copy; 2021 | All rights reserved </p>
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
			</footer>
		</>
	);
};

export default Footer;