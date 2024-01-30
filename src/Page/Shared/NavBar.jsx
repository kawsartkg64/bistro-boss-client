import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const [cart] = useCart()

    const navLink = <>

        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/contactus">Contact Us</NavLink></li>
        <li><NavLink to='dashboard'>DASHBOARD</NavLink></li>
        <li><NavLink to="/ourmenu">Our Menu</NavLink></li>
        <li><NavLink to='/ourshop'>Our Shop</NavLink></li>
        <li>
            <Link to='/'>
                <button className="btn">
                   <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>



    </>

    const handleSignOut = e => {
        logOut()
            .then(result => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log Out Success",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch()
        navigate('/login')
    }

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <Link to='/login'><button onClick={handleSignOut} className="btn btn-secondary">Log Out</button></Link>
                    :
                    <Link to='/login'><button className="btn btn-secondary">Log In</button></Link>
                }
            </div>
        </div>
    );
};

export default NavBar;