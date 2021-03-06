import React from 'react'

import styles from '../../Admin.module.scss'
import Navbar from '../../Partials/Navbar'
import Sidebar from '../../Partials/Sidebar'
import Categories from './Categories'

export default function AdminCategories() {



    return (
        <div className={styles['wrapper']}>
            <Sidebar/>
            <div className={styles['wrapper__main']}>
                <Navbar/>
                <div className={styles['wrapper__main--content']}>
                    <Categories/>
                </div>
            </div>
        </div>
    )
}