import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Shared Components/AuthProvider/AuthProvider';
import { FaCircleUser } from "react-icons/fa6";
import userProfile from '../../assets/Icons/profile-user.png'
import 'animate.css';
import { Bounce, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
    const photo = user?.photoURL;
    const name = user?.displayName;
    const email = user?.email

    const notifyLogout = () => {
        toast.success('Logout Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setTimeout(handleLogout, 2000);

    }

    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => {
                alert(error.message)
            })
    }
    // console.log(user)

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/userProfile'>User Profile</NavLink></li>
        {
            user && <li><NavLink to='/updateProfile'>Update Profile</NavLink></li>
        }

    </>

    return (
        <div className='bg-slate-400'>
            <div class="navbar mx-auto container " >
                <div class="navbar-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabindex="0"
                            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 text-xl shadow">

                            {navLinks}
                        </ul>
                    </div>
                    <h1 class="text-3xl"><span className='text-5xl font-bold text-orange-700'>E</span>state</h1>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu gap-3  menu-horizontal px-1 text-xl">
                        {navLinks}
                    </ul>
                </div>

                <div class="navbar-end gap-3">
                    <h1 className='text-sm overflow-auto lg:text-xl'>{email}</h1>
                    <img title={name?.length ? name : 'Name is not Available'} className='w-[40px] h-[40px] rounded-full' src=
                        {
                            user && photo ? photo : userProfile
                        }
                        alt="" />
                    {
                        user ?
                            <div>
                                <button
                                    onClick={notifyLogout}
                                    className="btn btn-secondary transition-transform duration-300 hover:scale-110 hover:bg-amber-200 hover:text-black"
                                >
                                    LogOut
                                </button>
                                <ToastContainer
                                    position="top-right"
                                    autoClose={5000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick={false}
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                    theme="light"
                                    transition={Bounce}
                                />
                            </div>


                            :
                            <Link to='/login'>
                                <button className=" btn btn-primary  transition-transform duration-300 hover:scale-110 hover:bg-lime-400 hover:text-black">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>



    );
};

export default Navbar;