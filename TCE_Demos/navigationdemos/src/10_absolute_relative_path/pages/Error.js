import React from 'react'
import MainNavigation from '../components/MainNavigation'
import Footer from '../components/Footer'

const ErrorPage = () => {
    return (
        <>
            <MainNavigation />
            <h1>An error has occurred!</h1>
            <p>Could not find this page!!</p>
            <Footer />
        </>
    )
}

export default ErrorPage