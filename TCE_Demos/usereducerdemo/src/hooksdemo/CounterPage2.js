import React, { useState } from 'react'
import classes from './CounterPage2.module.css'

const CounterPage2 = ({ initialCount }) => {
    const [count, setCount] = useState(initialCount);
    const [valueToAdd, setValueToAdd] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
        //setCount((prevValue) => { return prevValue + 1 });
    }
    const decrement = () => {
        setCount(count => count - 1);
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        setValueToAdd(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setCount(count + valueToAdd);
        setValueToAdd(0);
    }

    return (
        <div className={classes.main_div} >
            <h1>CounterPage2</h1>
            <h1>Count is {count}</h1>
            <button onClick={increment} className={classes.btn}>Increment</button>
            <button onClick={decrement} className={classes.btn}>Decrement</button>
            <form onSubmit={handleSubmit}>
                <label>Add A Lot</label>
                <input value={valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className={classes.txt}
                />
                <button className={classes.btn}>Add it!!!</button>
            </form>
        </div >
    )
}

export default CounterPage2