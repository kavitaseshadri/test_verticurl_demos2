import React from 'react'
import { Link, useParams } from 'react-router-dom'

const OrdersPage = () => {
    const params = useParams();
    const value = params.token;
    return (
        <div>
            <h1>Orders Page</h1>
            <Link to="/wrongurl">Click Here</Link>
            <h2>{value}</h2>
            {params.orderId === 'order1' ? 'You have won a lottery!!!' : 'Bad Luck, better luck next janam'}
        </div>
    )
}

export default OrdersPage