import React from 'react'
import styles from "./Categories.module.css"
import jobCategories from '../../categorIesData'

const Categories = () => {
    return (
        <div>
            <div className={`flex justify-center items-center ${styles.wrapper}`}>

                <div className={`pt-28 ${styles.categories}`}>
                    <h1 className="text-center">Choose Your Desire Category</h1>

                    <div className={styles["job-categories"]}>
                        {jobCategories.map((category, index) => (
                            <div key={index} className={`max-w-sm p-6 rounded-lg dark:bg-gray-800 dark:border-gray-700 ${styles["job-category"]}`}>
                                <span className={`p-3 ${styles["icon"]}`}>{category.icon}</span>
                                <span className={`${styles["title"]}`}>{category.title}</span>
                                <span className={`${styles["job-num"]}`}>100 Jobs</span>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Categories