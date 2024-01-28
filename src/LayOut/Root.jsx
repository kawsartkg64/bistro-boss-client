import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Page/Shared/NavBar";
import Footer from "../Page/Shared/Footer/Footer";


const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup')
    return (
        <div>
            
            {noHeaderFooter ||<NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;