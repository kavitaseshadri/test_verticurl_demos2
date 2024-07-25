import React, { useState } from 'react'
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'Spiral Square Notebook',
        amount: 299,
        date: new Date(2024, 4, 14),
    },
    {
        id: 'e2',
        title: 'Bic Pens M',
        amount: 1500,
        date: new Date(2024, 2, 26),
    },
    {
        id: 'e3',
        title: 'Swiss Army Knife',
        amount: 999,
        date: new Date(2023, 5, 13),
    },
    {
        id: 'e4',
        title: 'Faber Castell Highlighter',
        amount: 20,
        date: new Date(2023, 10, 15),
    },
]

const ExpenseApp = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        })
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    )
}

export default ExpenseApp