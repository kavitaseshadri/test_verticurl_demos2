import React from 'react'
import { Link } from 'react-router-dom'

const OrdersPage = () => {
    return (
        <div>
            <h1>Orders Page</h1>
            <h2><Link to='/wrongurl'>Click here</Link></h2>
            <h2><Link to='/wrongurl2'>wrongurl2</Link></h2>

        </div>
    )
}

export default OrdersPage