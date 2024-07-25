import React from 'react'
import { Link } from 'react-router-dom'


const HomePage = () => {
    return (
        <div>
            <h2>This is the HomePage</h2>
            <h2><a href="/products">Call Products Page using HREF</a></h2>
            <h2><Link to='/products'>Products Page</Link></h2>
            <h2><Link to='/orders'>Orders Page</Link></h2>
        </div>
    )
}

export default HomePage