import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Products/Products';
import About from '../About/About';
import Deshboard from '../Deshboard/Deshboard';



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
                element: <Products></Products>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/deshboard",
                element: <Deshboard></Deshboard>
            },

        ]

    },

])

export default myCreatedRoute;