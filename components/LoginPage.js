import Image from "next/image";
import Link from "next/link";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaGoogle,
	FaGithub,
	FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { useAuth } from "../hooks/useAuth";


const LoginPage = () => {
	const { contexts } = useAuth()
	const {
		sendVilifiedEmail,
		setUserName,
		sendEmailVerification,
		signInWithGoogle,
		signInWithFacebook,
		signInWithGithub,
		user,
		setUser,
		error,
		auth,
		setError,
		logOut,
		getEmail,
		getPassword,
		signUpWithEmail,
		signInWithEmail,
		getName,
		getPhotoURL,
	} = contexts;

	const { photoURL } = user;

	const image = <Image alt={user?.displayName} src={user?.photoURL} />;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 dark:bg-gray-700 bg-gray-100">
			<main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
				<div className="flex flex-col w-2/3 max-w-4xl dark:bg-gray-600  shadow-2xl rounded-2xl">
					<div className="w-5/5 p-5">
						<div className="text-left font-bold text-black dark:text-white">
							<span className="text-green-500">Company</span> Name
						</div>

						<div className="py-10">
							<h2 className="text-3xl font-bold text-green-500 mb-2 dark:text-gray-100">
								Sign in to Account
							</h2>
							<div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

							<div className="flex justify-center my-2">
								{" "}
								{/**Social Login */}

								<button
									onClick={signInWithFacebook}
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<FaFacebookF className="text-small" />
								</button>
								<button
									onClick={signInWithGithub}
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<	FaGithub className="text-small" />
								</button>
								<button
									onClick={signInWithGoogle}
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<FaGoogle className="text-small" />
								</button>
							</div>

							<div></div>

							{/* <p className='text-gray-400 my-3'>or use your email Account</p>

              <div className='flex flex-col items-center  '>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3"><FaRegEnvelope className="text-gray-400 mr-2" />
                  <input type="email" name="email" placeholder='Email' className="bg-gray-100 outline-none text-sm flex-1" />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center"><MdLockOutline className="text-gray-400 mr-2" />
                  <input type="password" name="password" placeholder='Password' className="bg-gray-100 outline-none text-sm flex-1" />
                </div>

                <div className="flex justify-between w-64 mb-5 pt-2">
                  <label className="flex items-center text-xs "><input type="checkbox" name="remember" className="mr-1" /> Remember me</label>
                  <a href="#" className="text-xs">Forgot password?</a>
                </div>
                <a href="#" className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"> SignUp</a>
              </div> */}
						</div>
					</div>

					{/* sign up section */}
					{/* <div className="px-12 text-white bg-green-500 py-36 pyw-2/5 rounded-br-2xl rounded-tr-2xl">
            <h2 className='text-3xl font-bold mb-2'>Hello</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className='mb-10'>Fill up personal information and  start journey with us</p>
            <a href="#" className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-green-500"> SignUp</a>
          </div> */}
				</div>
			</main>
		</div>
	);
};

export default LoginPage;
