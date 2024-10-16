import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css"
import Card from "../UI/Card";

function Expenses(props){
    const expenses=props.items;

    return(
        <Card className="expenses">
{expenses.map((expense)=>{
        return ( 
          <ExpenseItem 
          key={expense.id}
          date={expense.date}
          location={expense.location} 
          title={expense.title}
          price={expense.price}
          />
        )
      })}
        </Card>
    )

      
}

export default Expenses;