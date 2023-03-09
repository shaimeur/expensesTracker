import React  from "react";
import { useState } from "react";
import './ExpenseForm.css'
const ExpenseForm = () =>{
    const [entredTitle,setEntredTitle] = useState('');
    const [entredAmount,setEntredAmount] = useState('');
    const [entredDate,setEntredDate] = useState('');

    // using object instead of primitive types
    // const [userInput,setUserInput] = useState({
    //     entredTitle : '',
    //     entredAmount : '',
    //     entredDate : ''
    // })

    const titleChangeHandler = (event) =>{
         setEntredTitle(event.target.value);

         //First approche
        //  setUserInput({
        //     ...userInput,
        //     entredTitle : event.target.value,
        //  })

        //Second approche
        // setUserInput((prevState)=>{
        //     return {...prevState,entredTitle:event.target.value}
        // })
    }

    const amountChangeHandler = (event) =>{
            setEntredAmount(event.target.value);

            //First approche
            // setUserInput({
            //     ...userInput,
            //     entredAmount : event.target.value
            // })

            //Second approche
            // setUserInput((prevState)=>{
            //   return  {...prevState,entredAmount:event.target.value}
            // })
    }
    const dateChangeHandler = (event) =>{
        setEntredDate(event.target.value);

        //First approche
        // setUserInput({
        //     ...userInput,
        //     entredDate : event.target.value
        // })

        //Second approche
        // setUserInput((prevState)=>{
        //     return {...prevState,entredDate:event.target.value}
        // })
    }
    return (
        <form>
            <div className ="new-expense__controls">
                <div className ="new-expense__control">
                    <label>Title</label>
                    <input type ="text" onChange={titleChangeHandler} />
                </div>
                <div className ="new-expense__control">
                    <label>Amount</label>
                    <input type ="number" min = "0.01" step = "0.01" onChange={amountChangeHandler} />
                </div>
                <div className ="new-expense__control">
                    <label>Date</label>
                    <input type ="date" min = "2019-01-01" max = "2023-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>
        </form>
    )
}
export default ExpenseForm;