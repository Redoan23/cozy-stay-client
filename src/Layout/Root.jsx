import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar&Footer/Navbar';
import Footer from '../Pages/Navbar&Footer/Footer';

const Root = () => {
    return (
        <div className=' max-w-screen-2xl mx-auto bg-stone-800'>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default Root;