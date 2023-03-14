import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginHeader from '../Pages/Shered/Header/LoginHeader';

const LoginLayout = () => {
    return (
        <div>
            <LoginHeader></LoginHeader>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;