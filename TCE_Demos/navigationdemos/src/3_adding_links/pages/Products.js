import React from 'react'
import { Link } from 'react-router-dom'


const ProductsPage = () => {
    return (
        <div>
            <h1>My Products Page</h1>
            <h2><Link to="/">Home</Link></h2>
            <h2><Link to="/orders">Orders Page</Link></h2>
        </div>
    )
}

export default ProductsPage