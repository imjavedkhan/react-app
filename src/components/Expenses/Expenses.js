import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css';
import Card from '../UI/Card';
import { useState } from "react";

const Expenses = (props) => {

  const [selectYear, setSelectYear] = useState('2020');

  const filterChangeHandler = (filterYear) => {
    console.log(`Expenses.js : : ${filterYear}`);
    setSelectYear(filterYear);

  }
  return (
    <div>
    <Card className="expenses">
        <ExpensesFilter defaultYear={selectYear} onChangeFilter = {filterChangeHandler}/>
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem>
      </Card>
    </div>
  );
}

export default Expenses;
