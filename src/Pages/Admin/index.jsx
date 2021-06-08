import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'
import AuthContext from '../../Config/Context/AuthContext'
import styles from './Admin.module.scss'
import Navbar from './Partials/Navbar'
import Sidebar from './Partials/Sidebar'
import Dashboard from './Dashboard'

export default function Admin() {
    const state = useContext(AuthContext)

    if (!state.store.loggedIn) {
        return <Redirect to='/login'/>
    }

    console.log(state.store.loggedIn)
    return (
        <div className={styles['wrapper']}>
            <Sidebar/>
            <div className={styles['wrapper__main']}>
                <Navbar/>
                <div className={styles['wrapper__main--content']}>
                    <Dashboard user={state.userId}/>
                </div>
            </div>
        </div>
    )
}