import React, { useState, useReducer } from 'react'
import classes from './CounterPage4.module.css'

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            };
        case ADD_VALUE_TO_COUNT: return {
            ...state,
            count: state.count + state.valueToAdd,
        };
        case SET_VALUE_TO_ADD: return {
            ...state,
            valueToAdd: action.payload,
        };
        default:
            return state;
    }
}

const CounterPage4 = ({ initialCount }) => {

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })
    console.log(state);

    const increment = () => {

        dispatch({
            type: INCREMENT_COUNT,
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        })
    }
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
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

export default CounterPage4