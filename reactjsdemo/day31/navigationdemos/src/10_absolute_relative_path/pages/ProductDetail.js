import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const params = useParams();//acting like a gateway to access request params coming from this http request
    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
        </>
    )
}

export default ProductDetailPage