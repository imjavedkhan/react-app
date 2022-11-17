import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import '../UI/Card.css';


const ExpenseItem = (props) => {

    // const expenseDate = new Date().toDateString();
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = '294.67';

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;