import React from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        console.log('printed from newexpense');
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.round(Math.random() * 9999).toString(),
        }
        props.onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
        </div>
    )
}

export default NewExpense