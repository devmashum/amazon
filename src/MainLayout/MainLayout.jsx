import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Pages/Footer';

const MainLayout = () => {
    const navigation = useNavigation();
    return (
        <div >
            <section className=' flex justify-between items-center px-10 shadow-md py-7'>
                <div>
                    <h1 className=' text-4xl font-bold'>Amazon</h1>
                </div>
                <nav >
                    <ul className=' flex gap-5 text-xl font-bold'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/deshboard">Deshboard</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </nav>

            </section>
            <Outlet></Outlet>
            <Footer></Footer>



        </div>
    );
};

export default MainLayout;