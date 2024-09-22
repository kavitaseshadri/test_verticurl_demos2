import React from 'react'
import { Link } from 'react-router-dom'

const OrdersPage = () => {
    return (
        <div>
            <h1>Orders Page</h1>
            <Link to="/wrongurl">Click Here</Link>
        </div>
    )
}

export default OrdersPage