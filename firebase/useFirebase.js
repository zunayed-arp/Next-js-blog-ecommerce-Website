import { useEffect, useState } from "react";
import {
	GoogleAuthProvider,
	FacebookAuthProvider,
	GithubAuthProvider,
	getAuth,
	signInWithPopup,
	signOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
	sendEmailVerification,
} from "firebase/auth";
import { firebaseInitialization } from "../firebase/firebase.init";
import { useRouter } from "next/router";



firebaseInitialization()
const googleProvider = new GoogleAuthProvider();
const fbProvider = new FacebookAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
	const router = useRouter()
	const [user, setUser] = useState({});
	const [error, setError] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [photoURL, setPhotoURL] = useState("");

	const ClearError = () => {
		setTimeout(() => {
			setError("");
		}, 5000);
	};

	// clear error
	useEffect(() => {
		ClearError();
	}, [error]);

	//google sign in
	const signInWithGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				console.log(result.user)
				const user = result.user;
				setUser(user);
				router.push('/profile')
			}).catch((error) => {
				const errorMessage = err.message;
				setError(errorMessage);

			});
	};

	//facebook sign in
	const signInWithFacebook = () => {
		signInWithPopup(auth, fbProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				router.push('/profile')
			})
			.catch((err) => {
				const errorMessage = err.message;
				setError(errorMessage);
			});
	};

	//github sign in
	const signInWithGithub = () => {
		signInWithPopup(auth, gitHubProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				router.push('/profile')
			})
			.catch((err) => {
				const errorMessage = err.message;
				setError(errorMessage);
			});
	};

	//signInWithEmailAndPassword
	const signInWithEmail = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(auth, email, password)
			.then((res) => {
				setUser(res.user);
			})
			.catch((err) => setError(err.message));
	};

	// sign out
	const logOut = () => {
		signOut(auth)
			.then((result) => {
				setUser({});
				router.push('/')
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	// get currently signed in user
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			if (currentUser) {
				setUser(currentUser);
			}
		});
		return () => unsubscribe;
	}, [user]);

	// get name
	const getName = (e) => {
		setName(e?.target?.value);
	};
	// get email
	const getEmail = (e) => {
		setEmail(e?.target?.value);
	};
	// get password
	const getPassword = (e) => {
		setPassword(e?.target?.value);
	};
	// get password
	const getPhotoURL = (e) => {
		setPhotoURL(e?.target?.value);
	};

	// signUp
	const signUpWithEmail = () => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// update name and email
	const setUserName = () => {
		updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photoURL,
		}).then((result) => { });
	};

	// sendVilifiedEmail
	function sendVilifiedEmail() {
		sendEmailVerification(auth.currentUser).then((result) => {
			alert(
				`Please verify your email, a verification email has been sent to ${email}`
			);
		});
	}

	return {
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
	};
};

export default useFirebase;

