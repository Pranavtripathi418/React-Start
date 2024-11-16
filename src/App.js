import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses=[
    {id:1, date:new Date(2023,7,15), location: 'Mumbai', title:'Book', price:50},
    {id:2, date:new Date(2022,5,25), location: 'Pune', title:'Insurance', price:200},
    {id:3, date:new Date(2021,9,6), location: 'Bangalore', title:'Laptop', price:700},
    {id:4, date:new Date(2026,7,1), location: 'Delhi', title:'Pencil', price:500}
  ]
  
  return (
    <div>

    <NewExpense/>
    
    <Expenses items={expenses}/>
    </div>
  );
} 

export default App;
 