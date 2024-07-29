import React, { useState } from 'react'
import classes from './CounterPage1.module.css'

const CounterPage1 = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => {
        // setCount(count + 1);
        setCount(count => count + 1);
        //setCount((prevValue) => { return prevValue + 1 });
    }
    const decrement = () => {
        setCount(count => count - 1);
    }

    return (
        <div className={classes.main_div} >
            <h1>CounterPage1</h1>
            <h1>Count is {count}</h1>
            <button onClick={increment} className={classes.btn}>Increment</button>
            <button onClick={decrement} className={classes.btn}>Decrement</button>
        </div >
    )
}

export default CounterPage1