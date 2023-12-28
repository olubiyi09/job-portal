import React from 'react'
import styles from "./Jobs.module.css"
import { FaLaptopCode } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";

const Jobs = () => {
    return (
        <section className={`pt-16 ${styles.section}`}>
            <div className={`flex justify-center items-center flex-col ${styles.container}`}>
                <div className={styles["title-bg"]}>
                    <p className={styles.title}>Latest Jobs</p>
                </div>

                <div className={`flex ${styles.wrapper}`}>
                    <div className={`${styles.first}`}>
                        <div className={`${styles.job}`}>
                            <div className={`${styles.details}`}>
                                {/* <img src="" alt="" /> */}
                                < FaLaptopCode size={70} color="brown" />
                                <div className={`${styles.info}`}>
                                    <h1>UI/UX Designer</h1>
                                    <p className={`${styles.link}`}>Example.com</p>
                                    <p className='flex'><span>
                                        < RiMoneyDollarCircleFill size={18} color="brown" />
                                    </span>$20k - $25k</p>
                                    <p className={`flex item-center ${styles.location}`}><span>
                                        < FaLocationDot size={18} color="brown" />
                                    </span>Location 210-27 Quadra, Market Street, Victoria Canada</p>
                                </div>
                                <div className={`${styles["btn-sec"]}`}>
                                    <button>Apply</button>
                                    <button>Full Time</button>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className={`${styles.job}`}>
                        <div className={`${styles.details}`}>
                            {/* <img src="" alt="" /> */}
                            < FaLaptopCode size={70} color="brown" />
                            <div className={`${styles.info}`}>
                                <h1>Android Developer</h1>
                                <p className={`${styles.link}`}>Example.com</p>
                                <p className='flex'><span>
                                    < RiMoneyDollarCircleFill size={18} color="brown" />
                                </span>$20k - $25k</p>
                                <p className={`flex item-center ${styles.location}`}>
                                    <span>
                                        < FaLocationDot size={16} color="brown" />
                                    </span>Location 210-27 Quadra, Market Street, Victoria Canada</p>
                            </div>
                            <div className={`${styles["btn-sec"]}`}>
                                <button>Apply</button>
                                <button>Full Time</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Jobs