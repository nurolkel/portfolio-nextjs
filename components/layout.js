import Footer from "./footer";
import Navbar from "./navbar";


const Layout = ({ children }) => (
    <>
        <Navbar />
            {children}
        <Footer />
    </>
);

export default Layout;