import React, { useState } from 'react'

import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const toggle = () => {
        setIsEditing((prevValue) => !prevValue);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }
    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        console.log('printed from newexpense');
        console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData,
            id: Math.round(Math.random() * 9999).toString(),
        }
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && (<button onClick={startEditingHandler}>Add New Expense</button>)}
            {isEditing && <ExpenseForm
                onSaveExpenseData={onSaveExpenseDataHandler}
                onCancel={stopEditingHandler} />}
        </div>
    )
}

export default NewExpense