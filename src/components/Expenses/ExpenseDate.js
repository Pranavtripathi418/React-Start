import React from "react";
import "./ExpenseDate.css"

function ExpenseDate(props){
    const months=[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    const month= months[props.date.getMonth()];
   const year= props.date.getFullYear();
   const day= props.date.getDay();

   return(<div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
    </div>)
}

export default ExpenseDate;