import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import Todoitems from "./components/todoItems2"; 

import "./App.css";

function App() {
  const todoItems=[{todoName: "Buy Milk", todoDate: "4/9/2026"}, {todoName: "Walk the Dog", todoDate: "4/10/2026"}, {todoName: "Do Laundry", todoDate: "4/11/2026"}]
  
  return (
    <center class=" todo-container">
      <AppName />
       <AddTodo />
       <div className="item-container">
       <Todoitems todoitem={todoItems}/>
       </div>
    </center>
  );
}
export default App;
