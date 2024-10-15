import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses=[
    {id:1, date:new Date(2023,7,15), location: 'Mumbai', title:'Book', price:50},
    {id:2, date:new Date(2022,5,25), location: 'Pune', title:'Insurance', price:200},
    {id:3, date:new Date(2021,9,6), location: 'Bangalore', title:'Laptop', price:700},
    {id:4, date:new Date(2026,7,1), location: 'Delhi', title:'Pencil', price:500}
  ]
  return (
    <div>
    <h1>Let's Get Started</h1>
    {expenses.map((expense)=>{
      return (
        <ExpenseItem 
        date={expense.date}
        location={expense.location} 
        title={expense.title}
        price={expense.price}
        ></ExpenseItem>
      )
    })}
    </div>
  );
}

export default App;
