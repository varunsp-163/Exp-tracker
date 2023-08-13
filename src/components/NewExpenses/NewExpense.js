import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import React from "react";

import { useState } from "react";

const NewExpense = (props) => {
  const [isediting, setIsEditiong] = useState(false);

  const startEditinghandler = () => {
    setIsEditiong(true);
  };

  const stopHandlingHandler = () => {
    setIsEditiong(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isediting && (
        <button onClick={startEditinghandler}>Add New Expense</button>
      )}
      {isediting && <ExpenseForm onCancel={stopHandlingHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
