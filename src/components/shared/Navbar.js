"use client"

import Link from 'next/link';
import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import toast from 'react-hot-toast';

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogout = async () => {
        try {
          await logOut();
          toast.success('Sign out successful');
        } catch (error) {
          console.error('Logout failed:', error);
          toast.error('Sign out failed. Please try again.');
        }
      };

    return (
        <div>
            <div className="navbar bg-[#0d0c22]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link href="/home">Home</Link>
                            </li>
                            <li><Link href="/about">About</Link></li>

                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">Next app</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li><Link href="/about">About</Link></li>

                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end flex lg:flex-row flex-col ">
                    {
                        user && <h1 className="pr-2"><span className="font-bold">user:</span>{user.email}</h1>
                    }
                    {
                        user ?
                            <button onClick={handleLogout} className="btn btn-sm btn-primary">log out</button>
                            :

                            <Link href="/login"><button className="btn  btn-sm btn-primary">log in</button></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;