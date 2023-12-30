"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import styles from "./Login.module.css"
// import { validateEmail } from "../signup/page"
import { toast } from "sonner"

const LoginPage = ({ closeModal, openSignup }) => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()



    const onLogin = async (e) => {
        e.preventDefault()

        const { email, password } = user

        if (!email || !password) {
            return toast.error("All fields are required")
        }

        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/login", user);
            console.log("Login successful", response.data);
            toast.success("Login successful")
            router.push("/profile")
            closeModal();
        } catch (error) {
            console.log("Login failed", error.response.data);
            toast.error(error.response.data.message || "Login failed");
        } finally {
            setIsLoading(false)
        }

    }

    const signupBtn = () => {
        closeModal()
        openSignup()
    }
    return (
        <div className="flex items-center justify-center py-2">
            <div className={`flex items-center justify-center ${styles.wrapper}`}>
                <div className={`lg:w-96 md:w-96 sm:w-auto s p-6 rounded-md ${styles.form}`}>
                    <form className="mt-3">
                        <h1 className="text-3xl block text-center font-semibold">Login</h1>
                        <hr className="mt-3 mb-3" />
                        <label htmlFor="email" className="block">Email</label>
                        <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="name" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />

                        <label htmlFor="name" className="block">Password</label>
                        <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />

                        <button onClick={onLogin} className="border-2 text-white py-2 w-full rounded-md hover:bg-transparent font-semibold">Login</button>

                        <div className={`mt-3 flex items-center ${styles.option}`}>
                            Don't have an account? <p onClick={signupBtn} className="ml-1 cursor-pointer">Sign up</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default LoginPage