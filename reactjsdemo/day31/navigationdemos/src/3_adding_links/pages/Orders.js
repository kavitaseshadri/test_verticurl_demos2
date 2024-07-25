import React from 'react'
import { Link } from 'react-router-dom'

const OrdersPage = () => {
    return (
        <div>
            <h1>Orders Page</h1>
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/products">Products Page</Link></h2>
        </div>
    )
}

export default OrdersPage