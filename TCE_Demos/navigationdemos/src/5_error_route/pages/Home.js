import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>HomePage</h1>
            <h2><Link to='/wrongurl'>Click here</Link></h2>
            {/* <h2><Link to="/products">Products Page</Link></h2> */}
        </div>
    )
}

export default HomePage