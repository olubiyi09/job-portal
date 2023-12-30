"use client"

import Link from 'next/link';
import { useState } from 'react';
import styles from "./Navbar.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Modal } from 'antd';
import LoginPage from '../login/Login';
import SignUp from '../signup/Signup';

function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [issModalOpen, setIssModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const displayModal = () => {
        setIssModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setIssModalOpen(false);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        setIssModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIssModalOpen(false);
    };

    const handleLogin = () => {
        displayModal()
        setNavbar(!navbar)
    }
    const handleSignup = () => {
        showModal()
        setNavbar(!navbar)
    }
    const loginProps = () => {
        displayModal()
        setNavbar(!navbar)
    }
    return (
        <div>
            <nav className={`w-full top-0 left-0 right-0 z-10  ${styles.header}`}>
                <div className={`justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ${styles.wrapper}`}>
                    <div>
                        <div className={`flex items-center justify-between py-3 md:py-5 md:block ${styles.logo}`}>
                            <Link href="/">
                                <h2 className="text-3xl font-bold ">MyJobs</h2>
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
                            <ul className={`h-screen md:h-auto  md:flex items-center justify-center ${styles.ul}`}>
                                <li className="pb-6 text-white py-2 md:px-4 text-center border-b-2 md:border-b-0 border-white md:hover:bg-transparent">
                                    <Link href="/" onClick={() => setNavbar(!navbar)}>
                                        Home
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-4 text-center  border-b-2 md:border-b-0 border-white md:hover:bg-transparent">
                                    <Link href="/jobs" onClick={() => setNavbar(!navbar)}>
                                        Find a job
                                    </Link>
                                </li>
                                <li className="pb-6 text-white py-2 px-4 text-center  border-b-2 md:border-b-0  border-white md:hover:bg-transparent">
                                    <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                                        Contact
                                    </Link>
                                </li>


                                <li className="pb-6 text-white py-2 px-4 text-center border-b-2 md:border-b-0 border-white md:hover:bg-transparent">

                                    <div className={`rounded ${styles.btn}`}>
                                        <div onClick={() => handleSignup()}>
                                            Signup
                                        </div>
                                    </div>
                                </li>

                                <li className="pb-6 text-white py-2 px-4 text-center  border-b-2 md:border-b-0  border-white md:hover:bg-transparent">

                                    <div className={`rounded ${styles.btn}`}>
                                        <div onClick={() => handleLogin()}>
                                            Login
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav >

            <Modal Modal open={isModalOpen} nOk={handleOk} onCancel={handleCancel} footer={null} >

                <SignUp closeModal={closeModal} openLogin={loginProps} />
            </Modal >
            <Modal Modal open={issModalOpen} nOk={handleOk} onCancel={handleCancel} footer={null} >
                <LoginPage closeModal={closeModal} openSignup={handleSignup} />

            </Modal >

        </div >
    );
}

export default NavBar;
