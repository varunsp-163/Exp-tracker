import "./ExpenseForm.css";
import "./NewExpense.css";
import React from "react";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [enteredValue, setEnteredValue] = useState({
  //     EnteredTitle: "",
  //     EnteredAmount: "",
  //     EnteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     // setEnteredValue({
  //     //   ...enteredValue,
  //     //   EnteredTitle: event.target.value,
  //     // });
  //     setEnteredValue((prevState) => {
  //       return { ...prevState, EnteredTitle: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     // setEnteredValue({
  //     //   ...enteredValue,
  //     //   EnteredAmount: event.target.value,
  //     // });

  //     setEnteredValue((prevState) => {
  //       return { ...prevState, EnteredAmount: event.target.value };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     // setEnteredValue({
  //     //   ...enteredValue,
  //     //   EnteredDate: event.target.value,
  //     // });
  //     setEnteredValue((prevState) => {
  //       return { ...prevState, EnteredDate: event.target.value };
  //     });
  //   };

  const inputHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault(); // prevent form to reload

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form className="new-expense" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(event) => {
              inputHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(event) => {
              inputHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={(event) => {
              inputHandler("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>Cancel</button>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
