import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'
import classes from './Root.module.css';

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <div className={classes.content}>
                <div>Content from Child Pages will go here</div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default RootLayout