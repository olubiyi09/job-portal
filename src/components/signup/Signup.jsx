"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"
import styles from "./Signup.module.css"

export const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const SignUp = ({ closeModal, openLogin }) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const router = useRouter()

    const [isLoading, setIsLoading] = useState(false)


    const onSignup = async (e) => {
        e.preventDefault()

        const { name, email, password } = user



        if (!name || !email || !password) {
            return toast.error("All fields are required")
        }
        if (password.length < 6) {
            return toast.error("Password must be up to 6 characters")
        }
        if (!validateEmail(email)) {
            return toast.error("Please enter a valid email")
        }


        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful", response.data);
            toast.success("Signup successful")
            router.push("/")
            closeModal();
        } catch (error) {
            console.log("Signup failed", error.response.data);
            toast.error(error.response.data.message || "Signup failed");
        } finally {
            setIsLoading(false)
        }

    }

    const loginBtn = () => {
        closeModal()
        openLogin()
    }
    return (
        <div className="flex items-center justify-center ">
            <div className={`flex items-center justify-center ${styles.wrapper}`}>

                <div className={`lg:w-96 md:w-96 sm:w-auto s p-6 rounded-md ${styles.form}`}>
                    <form className="mt-3">
                        <h1 className="text-3xl block text-center font-semibold">Sign up</h1>
                        <hr className="mt-3" />
                        <label htmlFor="name" className="block">Name</label>
                        <input className="p-2 px-2 w-full text-base border border-gray-400 rounded-lg mb-4 bg-transparent focus:outline-none focus:border-gray-600" id="name" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Name" />

                        <label htmlFor="email" className="block">Email</label>
                        <input className="p-2 px-2 w-full text-base border border-gray-400 rounded-lg mb-4 bg-transparent focus:outline-none focus:border-gray-600" id="email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />

                        <label htmlFor="password" className="block">Password</label>
                        <input className="p-2 px-2 w-full text-base border border-gray-400 rounded-lg mb-4 bg-transparent focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />

                        <button onClick={onSignup} className="border-2 text-white py-2 w-full rounded-md hover:bg-transparent font-semibold">Signup</button>

                        <div className={`mt-3 flex items-center ${styles.option}`}>
                            Already have an account? <p onClick={loginBtn} className="ml-1 cursor-pointer"> Login</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp