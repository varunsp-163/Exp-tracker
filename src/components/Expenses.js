import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./NewExpenses/ExpensesFilter";
import ExpensesChart from "./NewExpenses/ExpensesChart";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // props.k.removeTheItem(selectedYear);
  };

  const filteredExpenses = props.e.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpensesFilter selected={filteredYear} onClickFilter={filterHandler} />

      <ExpensesChart expenses={filteredExpenses}/>


      {expenseContent}

      {/*     
      <ExpenseItem exp={props.e[0]} />
      <ExpenseItem exp={props.e[1]} />
      <ExpenseItem exp={props.e[2]} />
      <ExpenseItem exp={props.e[3]} /> */}
    </div>
  );
}

export default Expenses;
