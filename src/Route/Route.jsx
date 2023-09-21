import React from 'react';
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Products from '../Products/Products';
import About from '../About/About';
import Deshboard from '../Deshboard/Deshboard';
import Product from '../Product/Product';



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
                path: "/deshboard",
                element: <Deshboard></Deshboard>
            },
            {
                path: "/product/:id",
                element: <Product></Product>,
                loader: (object) => fetch(`https://dummyjson.com/products/${object.params.id}`)
            },

        ]

    },

])

export default myCreatedRoute;