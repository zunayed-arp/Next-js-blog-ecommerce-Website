import { createContext } from "react";
import useFirebase from "../firebase/useFirebase";
import useCart from "../hooks/useCart";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allContexts = useFirebase();
	const { addToCart } = useCart();
	const data = {
		contexts: allContexts,
		addToCart,
	}

	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;