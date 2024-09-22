import React, { useState, useReducer } from 'react'
import classes from './CounterPage3.module.css'

const reducer = (state, action) => {
    if (action.type === 'increment') {
        return {
            ...state,
            count: state.count + 1
        }
    }
    if (action.type === 'decrement') {
        return {
            ...state,
            count: state.count - 1
        }
    }
    //you have to return the state object, even if it has not been changed
    //don not change the state variable directly!!
    return state;
    //otherwise the properties of the state object will be set to undefined
}

const CounterPage3 = ({ initialCount }) => {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })

    // const [state, dispatchFunction] = useReducer(RefrenceToreducerFunction, initialState,})

    console.log(state);

    const increment = () => {
        // setCount(count => count + 1);
        //setCount((prevValue) => { return prevValue + 1 });
        dispatch({
            type: 'increment',//the value gets assigned to the action parameter of reducer function
        })//this is going to call reducer function
    }
    const decrement = () => {
        // setCount(count => count - 1);
        dispatch({
            type: 'decrement',//the value gets assigned to the action parameter of reducer function
        })//this is going to call reducer function
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    }

    return (
        <div className={classes.main_div} >
            <h1>CounterPage2</h1>
            <h1>Count is {state.count}</h1>
            <button onClick={increment} className={classes.btn}>Increment</button>
            <button onClick={decrement} className={classes.btn}>Decrement</button>
            <form onSubmit={handleSubmit}>
                <label>Add A Lot</label>
                <input value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type="number"
                    className={classes.txt}
                />
                <button className={classes.btn}>Add it!!!</button>
            </form>
        </div >
    )
}

export default CounterPage3