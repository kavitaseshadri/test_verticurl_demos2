import React from 'react'
import Expenses from './expenseapp08/Expenses'

const ExpenseApp08 = () => {
    const expenses = [
        {
            id: 'e1',
            title: 'Spiral Notebook',
            amount: 500,
            date: new Date(2023, 4, 14)
        },
        {
            id: 'e2',
            title: 'Scotch Tape',
            amount: 125,
            date: new Date(2023, 7, 20)
        },
        {
            id: 'e3',
            title: 'Marker Pens',
            amount: 300,
            date: new Date(2022, 4, 14)
        },
        {
            id: 'e4',
            title: 'Clips',
            amount: 100,
            date: new Date(2022, 8, 29)
        },
        {
            id: 'e5',
            title: 'Sharpie Pens',
            amount: 700,
            date: new Date(2019, 4, 14)
        }
    ]
    return (
        <div>
            <h2>Let's get started!!</h2>
            <Expenses expenses={expenses} />
        </div>
    )
}

export default ExpenseApp08