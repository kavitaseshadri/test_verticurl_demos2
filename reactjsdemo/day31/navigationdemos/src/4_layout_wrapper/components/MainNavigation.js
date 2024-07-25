import React from 'react'
import { Link } from 'react-router-dom'

const MainNavigation = () => {
    return (
        <div>
            <h2>
                <Link to="/">Home</Link>&nbsp;&nbsp;
                <Link to="/products">Products</Link>&nbsp;&nbsp;
                <Link to="/orders">Orders</Link>
            </h2>

        </div>
    )
}

export default MainNavigation