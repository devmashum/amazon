import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Products/Products';
import About from '../About/About';
import Product from '../Product/Product';
import DashboardLayout from '../MainLayout/DashboardLayout';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import EditProfile from '../EditProfile/EditProfile';



const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>,
                loader: () => fetch('https://dummyjson.com/products')
            },
            {
                path: "/about",
                element: <About></About>
            },

            {
                path: "/product/:id",
                element: <Product></Product>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },
            {
                path: "/dashboard",
                element: <DashboardLayout></DashboardLayout>,
                children: [
                    {
                        path: "/dashboard",
                        element: <Dashboard></Dashboard>
                    },
                    {
                        path: "/dashboard/profile",
                        element: <Profile></Profile>
                    },
                    {
                        path: "/dashboard/editProfile",
                        element: <EditProfile></EditProfile>
                    },

                ]
            },
        ]

    },

])

export default myCreatedRoute;