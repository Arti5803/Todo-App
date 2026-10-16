import { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import {useReducer} from "react";
import "./App.css";
import TodoItemsContext from "./store/todo-item-store";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  
  return (
   <TodoItemsContextProvider>


    <center class=" todo-container">
      <AppName />
       <AddTodo />
       <div className="item-container">
        <WelcomeMsg /> 
        <TodoItems 
        />
       </div>
    </center>
    </TodoItemsContextProvider>
  
  );
}
export default App;
