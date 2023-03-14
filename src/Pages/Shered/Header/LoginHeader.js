/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../asstes/download.png'

const LoginHeader = () => {
    const MenuItems = <>
    <li className='text-[18px] cbtn2 mr-5'><Link to='/'>Home</Link></li>
    <li className='text-[18px] cbtn2 mr-5'><Link to='/course'>Course</Link></li>
    <li className='text-[18px] cbtn2 mr-5'><Link to='/aboutus'>About Us</Link></li>
    <li className='text-[18px] cbtn2 mr-5'><Link to='/contract'>Contract Us</Link></li>
    </>
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
        </div>
    );
};

export default LoginHeader;