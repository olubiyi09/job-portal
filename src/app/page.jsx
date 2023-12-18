"use client"
import styles from "./Home.module.css"
import { FaUser } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import Categories from "../components/categories/Categories"
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-fit">

        <div className={`flex justify-between items-center pt-8 ${styles["header-section"]}`}>
          <div className={`pl-20 ${styles.wrapper}`}>
            <h1>Search For Your <span style={{ color: "#844d36" }}>Dream Job</span> Here </h1>
            <p>Jobs, Employment & Future Career Opportunities</p>

            <div className={`flex items-center space-x-2 w-fit pl-4 ${styles.left}`}>
              <div className="relative">
                <FaUser className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-900 ${styles["input-icon"]}`} />
                <input
                  type="text"
                  placeholder="Job Title"
                  className="pl-10 pr-2 py-1border-none rounded focus:outline-none m-0"
                />
              </div>
              <div className="relative">
                <FaLocationDot className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-900 ${styles["input-icon"]}`} size={18} />
                <input
                  type="text"
                  placeholder="Country"
                  className="pl-10 pr-2 py-1 border-l-2 rounded focus:outline-none m-0"
                />
              </div>
              <button
                type="button"
                className={`text-white px-10 py-6 focus:outline-none hover:bg-amber-900 m-0 ${styles.btn}`}
              >
                Search
              </button>
            </div>
          </div>

          <div className={`${styles.image}`}>
            <img src="./4.png" alt="header image" />
          </div>

        </div>
        <div className={`flex justify-between items-center pl-20 pr-20 pt-10 pb-10 ${styles.box}`}>
          <h1>Create your profile to find thousands Jobs, Build your Career & Employment</h1>
          <button className={`px-10 py-6 focus:outline-none bg-white text-amber-900 font-medium ${styles["banner-btn"]}`}>Create Profile</button>
        </div>
      </div>

      <Categories />
    </>
  )
}


