import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const RootLayout = () => {
    return (
        <>
            <MainNavigation />
            <div>
                <div>Content from Child Pages will go here</div>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default RootLayout