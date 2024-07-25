import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS = [
    { id: 'a1', title: 'Product-1' },
    { id: 'a2', title: 'Product-2' },
    { id: 'a3', title: 'Product-3' },
];

const ProductsPage = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Link to={`/orders/order1`} > Order1</Link>&nbsp;&nbsp;
            <Link to={`/orders/order2`} > Order2</Link>
            <Link to={`/orders?token=111`} > Order3</Link>


            <ul>
                {PRODUCTS.map((prod) => (
                    <li key={prod.id}>
                        <Link to={`/products/${prod.id}`} > {prod.title}</Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default ProductsPage