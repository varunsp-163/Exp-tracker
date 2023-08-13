import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import { useState } from "react";
const ExpenseItem = (props) => {
  return (
    <div>
      <Card className="expense-item">
        <ExpenseDate d={props.date} />

        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </div>
  );
};

export default ExpenseItem;
