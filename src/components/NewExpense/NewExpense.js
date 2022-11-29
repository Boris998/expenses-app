import './NewExpense.css';
import ExpenceForm from "./ExpenseForm";

//new expense inherits some props from expense forms(lifting state up)
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className='new-expense'>
        <ExpenceForm onSaveExpenseData={saveExpenseDataHandler}></ExpenceForm>
    </div>
}

export default NewExpense;