"use client"
import Link from 'next/link';
import { useState } from 'react';
import styles from "./Navbar.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div>
            <nav className={`w-full fixed top-0 left-0 right-0 z-10  ${styles.header}`}>
                <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            <Link href="/">
                                <h2 className="text-2xl text-white font-bold ">MyJobs</h2>
                            </Link>
                            <div className="md:hidden">
                                <button
                                    className="p-2"
                                    onClick={() => setNavbar(!navbar)}
                                >
                                    {navbar ? (
                                        <div className={`focus:border-none active:border-none${styles["hamburger-icon"]}`}>
                                            <FaTimes size={36} color="#eee" />
                                        </div>
                                    ) : (
                                        <div className={`focus:border-none active:border-none${styles["hamburger-icon"]}`}>
                                            <GiHamburgerMenu size={36} color="#eee" />
                                        </div>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div
                            className={`flex-1 justify-self-center items-center md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}
                        >
                            <ul className="h-screen md:h-auto  md:flex items-center justify-center ">
                                <li className="pb-6 text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 md:border-b-0 border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/jobs" onClick={() => setNavbar(!navbar)}>
                                        Find a job
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 md:border-b-0  border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 md:border-b-0 border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/signup" onClick={() => setNavbar(!navbar)}>
                                        Signup
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 md:border-b-0  border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/login" onClick={() => setNavbar(!navbar)}>
                                        Login
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-6 text-center  border-b-2 md:border-b-0  border-white  md:hover:text-white md:hover:bg-transparent">
                                    <Link href="/logout" onClick={() => setNavbar(!navbar)}>
                                        Logout
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
















// import React from 'react'
// import styles from "./Navbar.module.css"
// import Link from 'next/link'
// import { GiHamburgerMenu } from "react-icons/gi";

// const Navbar = () => {
//     return (
//         <header className={`flex justify-between items-center ${styles.header}`}>
//             <nav className="relative flex justify-between items-center w-full px-10 py-2 text-white">
//                 {/* <nav className="py-2 text-white"> */}

//                 {/* <div className={` relative flex h-16 items-center justify-between`}> */}

//                 <div className={`${styles.logo}`}>
//                     <h1 className={`text-3xl font-bold`}>MyJobs</h1>
//                 </div>
//                 <div className={`flex gap-10 ${styles["nav-wrapper"]}`}>
//                     <Link href="/">Home</Link>
//                     <Link href="/jobs">Find a job</Link>
//                     <Link href="/">Contact</Link>
//                     <Link href="/signup">Sign up</Link>
//                     <Link href="/login">Login</Link>
//                     <Link href="/logout">Logout</Link>
//                 </div>
//                 <div className={`${styles["hamburger-icon"]}`}>
//                     <GiHamburgerMenu size={36} />
//                     {/* </div> */}
//                 </div>
//             </nav>
//         </header>
//     )
// }

// export default Navbar