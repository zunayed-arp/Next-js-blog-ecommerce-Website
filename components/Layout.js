import AuthProvider from "../contexts/AuthProvider";
import Footer from "./Footer";
import Navigation from "./Navigation";



const Layout = ({ children }) => {
	return (
		<div >
		
			<AuthProvider>
		
					<Navigation />
					{children}
					<Footer />
				
			</AuthProvider>
		</div>
	);
};

export default Layout;