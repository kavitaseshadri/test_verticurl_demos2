import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        // <div>
        //     <h2>
        //         <Link to="/">Home</Link>&nbsp;&nbsp;
        //         <Link to="/products">Products</Link>&nbsp;&nbsp;
        //         <Link to="/orders">Orders</Link>
        //     </h2>

        // </div>
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation