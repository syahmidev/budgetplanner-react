import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

    return (
        <div>
            <ul className="list-group">
                {expenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </div>
    );
}

export default ExpenseList;
