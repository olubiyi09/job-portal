"use client"
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'

const ProfilePage = () => {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get("api/users/logout")
            toast.success("Logout successful")
            router.push("/")
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get("/api/users/me")
        console.log(res.data);
        setData(res.data.data._id)
    }

    // useEffect(() => {
    //     getUserDetails()
    // })
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Profile</h1>
            <hr />
            <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
            {/* <button className="bg-green-500 mt-4 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Get User Details</button> */}
            <button onClick={getUserDetails} className="bg-green-500 mt-4 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">Get User Details</button>
            <button onClick={logout} className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
    )
}

export default ProfilePage