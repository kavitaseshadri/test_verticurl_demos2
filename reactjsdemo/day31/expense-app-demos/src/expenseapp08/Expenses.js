import React from 'react'
import ExpenseItem from '../expenseapp08/ExpenseItem'

const Expenses = ({ expenses }) => {
    return (
        <div>
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

export default Expenses