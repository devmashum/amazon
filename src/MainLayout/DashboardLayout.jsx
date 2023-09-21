import React from 'react';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
    const navigate = useNavigate();

    const handleUseNavigate = () => {
        navigate('/');
    }

    return (
        <div>
            <div className='flex gap-20 m-10'>
                <div className='w-[20%] bg-purple-400 p-20'>
                    <ul>
                        <li >
                            <Link to='/dashboard'>Dashboard</Link>
                            <hr />
                            <Link to='/dashboard/profile'>Profile</Link>
                            <hr />
                            <NavLink to='/dashboard/editProfile'>Edit Profile</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='bg-blue-300 p-20'>
                    <Outlet></Outlet>
                </div>

                <div>

                </div>
            </div>
            <div onClick={handleUseNavigate} className='w-full text-center bg-purple-600 p-2 text-white text-2xl font-bold'><button>HOME</button></div>
        </div>
    );
};

export default DashboardLayout;