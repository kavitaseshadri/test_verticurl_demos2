import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products');
    }
    return (
        <div>
            <h1>HomePage</h1>
            {/* <h2><Link to="/products">Products Page</Link></h2> */}
            <button onClick={navigateHandler}>Navigate to Product</button>
        </div>
    )
}

export default HomePage