import React from 'react'
import ExpenseItem from './expenseapp07/ExpenseItem'

const ExpenseApp07 = () => {
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
        <div> <h1>Let's Get Started</h1>
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            />
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}

                date={expenses[1].date}
            />
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            />
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            />
            <ExpenseItem
                title={expenses[4].title}
                amount={expenses[4].amount}
                date={expenses[4].date}
            />
        </div>
    )
}
export default ExpenseApp07