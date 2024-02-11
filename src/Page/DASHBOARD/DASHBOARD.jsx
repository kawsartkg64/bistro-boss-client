import { Helmet } from 'react-helmet-async';
import { FaAd, FaBook, FaCalendar, FaFileContract, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaUser, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useAdmin from '../../Hooks/useAdmin';


const DASHBOARD = () => {
    const [cart] = useCart()
    const [isAdmin] = useAdmin()

    return (
        <div className='flex'>
            <div className='w-64 min-h-full bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Home Admin</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/additem"><FaUtensils></FaUtensils>Add Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageitem"><FaList></FaList>Manage Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment"><FaBook></FaBook>Manage bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/alluser"><FaUsers></FaUsers>All User</NavLink>
                                </li>
                               
                            </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome></FaHome>Home Admin</NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/additem"><FaAd></FaAd>Add Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageitem"><FaList></FaList>Manage Item</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment"><FaMoneyBill></FaMoneyBill>Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservision"><FaCalendar></FaCalendar>Reservision</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart :({cart.length})</NavLink>
                                </li>
                            </>
                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink to="/"><FaHome></FaHome>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourmenu"><FaList></FaList>Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourshop"><FaShoppingCart></FaShoppingCart>Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contactus"><FaFileContract></FaFileContract>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DASHBOARD;