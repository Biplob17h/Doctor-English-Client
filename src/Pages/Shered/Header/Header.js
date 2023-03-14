/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../asstes/download.png'
import { AuthContext } from '../../../Context/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const MenuItems = <>
        <li className='text-[18px] cbtn2 mr-5'><Link to='/'>Home</Link></li>
        <li className='text-[18px] cbtn2 mr-5'><Link to='/course'>Course</Link></li>
        <li className='text-[18px] cbtn2 mr-5'><Link to='/aboutus'>About Us</Link></li>
        <li className='text-[18px] cbtn2 mr-5'><Link to='/contract'>Contract Us</Link></li>
    </>

    const handleLogout = () => {
        logOut()
            .then(() => { console.log('logout successfull') })
            .catch((error) => { console.log(error) })
    }
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {MenuItems}
                    </ul>
                </div>
                <img className='h-[130px] lg:h-[150px] ' src={img} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1">
                    {MenuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                        <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        {
                                            user?.photoURL
                                            ?<><img src={user?.photoURL}  alt=''/></>
                                            :<><img src={`https://cdn-icons-png.flaticon.com/512/21/21104.png`} alt='' /></>
                                        }
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <Link to='/profile' className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                    <li><Link to='/notfound'>Settings</Link></li>
                                    <li onClick={handleLogout}><Link>Logout</Link></li>
                                </ul>
                            </div>
                        </>
            :
            <><Link to='/auth/login'><button className='btn cbtn1'>Login</button></Link></>
                }
        </div>
        </div >
    );
};

export default Header;