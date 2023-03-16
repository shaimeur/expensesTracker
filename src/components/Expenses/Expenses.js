import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

   const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear
   })
   let expensesContent = <p>No expense Found!!</p>;

   if(filteredExpenses.length > 0){
        expensesContent =   filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    })
   }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
          onChange = {filteredExpenses}
        />
          {expensesContent}
        {/* {filteredExpenses.length === 0 ? <p>No expense found!</p>: filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })} */}
      </Card>
    </div>
  );
};

export default Expenses;
