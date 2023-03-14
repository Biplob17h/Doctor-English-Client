import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Componentes/NotFound";
import Profile from "../Componentes/Profile";
import ProfilePicture from "../Componentes/ProfilePicture";
import UpdateParentsInfo from "../Componentes/UpdateParentsInfo";
import LoginLayout from "../Layout/LoginLayout";
import Main from "../Layout/Main";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Contract from "../Pages/Contract/Contract";
import Course from "../Pages/Course/Course/Course";
import Home from "../Pages/Home/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contract',
                element: <Contract></Contract>
            },
            {
                path:'/notfound',
                element:<NotFound></NotFound>
            },
            {
                path:'/profile',
                element:<Profile></Profile>
            }

        ]
    },
    {
        path: '/auth',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/parents',
                element: <UpdateParentsInfo></UpdateParentsInfo>
            },
            {
                path:'/auth/photo',
                element:<ProfilePicture></ProfilePicture>
            }
        ]
    }
])

export default routes;