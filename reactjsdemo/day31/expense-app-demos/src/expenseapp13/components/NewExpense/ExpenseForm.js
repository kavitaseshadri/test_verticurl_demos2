import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    return (
        <form onSubmit={(event) => { alert('submitted ' + enteredAmount + ' ' + enteredTitle + ' ' + enteredDate) }}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(event) => { setEnteredTitle(event.target.value) }} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(event) => { setEnteredAmount(event.target.value) }} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2024-12-31"
                        onChange={(event) => { setEnteredDate(event.target.value) }} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm