
import { createContext } from "react";
import useFirebase from "../firebase/useFirebase";



export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const allContexts = useFirebase();
	const data = {
		contexts: allContexts,
	}

	return (
		<AuthContext.Provider value={data}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;