"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"

const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    })


    const onLogin = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/login", user);
            console.log("Login successful", response.data);
            toast.success("Login successful")
            router.push("/profile")
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error("Login failed")
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-600">
            <div className="lg:w-96 md:w-96 sm:w-auto s p-6 shadow-lg bg-white rounded-md">

                <h1 className="text-3xl block text-center font-semibold">Login</h1>
                <hr className="mt-3" />
                <form className="mt-3">
                    <label htmlFor="email" className="block">Email</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="name" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />

                    <label htmlFor="name" className="block">Password</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />

                    <button onClick={onLogin} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold" disabled={buttonDisabled} style={{ cursor: buttonDisabled ? 'not-allowed' : 'pointer' }}>Login</button>

                    <div className="mt-3 text-indigo-700">
                        <Link href="/signup">Sign up</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage