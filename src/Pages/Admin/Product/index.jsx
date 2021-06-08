import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'

import styles from '../Admin.module.scss'
import Navbar from '../Partials/Navbar'
import Sidebar from '../Partials/Sidebar'
import AddProduct from './Product'

export default function AdminProduct() {
   
    return (
        <div className={styles['wrapper']}>
            <Sidebar/>
            <div className={styles['wrapper__main']}>
                <Navbar/>
                <div className={styles['wrapper__main--content']}>
                    <AddProduct/>
                </div>
            </div>
        </div>
    )
}