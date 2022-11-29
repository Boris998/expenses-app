import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
    //hook-useState-> title is the variable stored in props.title and the set title is the funct updating the state
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date}></ExpenseDate>

                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>{props.amount}$$$$</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;
