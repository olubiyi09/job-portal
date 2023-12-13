"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { toast } from "sonner"

const SignUp = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cPassword: "",
    })

    const router = useRouter()

    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.name.length > 0) {
            setButtonDisabled(false)
        } else {
            setButtonDisabled(true)
        }
    }, [user])


    const onSignup = async (e) => {
        e.preventDefault()
        try {
            setIsLoading(true)
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup successful", response.data);
            toast.success("Signup successful")
            router.push("/login")
        } catch (error) {
            console.log("Signup failed", error.message);
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-indigo-600">
            <div className="lg:w-96 md:w-96 sm:w-auto s p-6 shadow-lg bg-white rounded-md">

                <h1 className="text-3xl block text-center font-semibold">SignUp</h1>
                <hr className="mt-3" />
                <form className="mt-3">
                    <label htmlFor="name" className="block">Name</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="name" type="text" value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} placeholder="Name" />

                    <label htmlFor="email" className="block">Email</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="email" type="email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />

                    <label htmlFor="password" className="block">Password</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="password" type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />

                    <label htmlFor="cPassword" className="block">Confirm Password</label>
                    <input className="p-2 px-2 w-full text-base border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" id="cPassword" type="password" value={user.cPassword} onChange={(e) => setUser({ ...user, cPassword: e.target.value })} placeholder="Confirm Password" />

                    <button onClick={onSignup} className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold" disabled={buttonDisabled} style={{ cursor: buttonDisabled ? 'not-allowed' : 'pointer' }}>Signup</button>

                    <div className="flex justify-between items-center mt-3 text-indigo-700">
                        <Link href="/login">Login</Link>
                        <Link href="/">Forgot Password</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp