import React, { useState } from "react";  
import {useRef} from "react";
import {useContext} from "react";
import {TodoItemsContext} from "../store/todo-item-store";



function AddTodo() {

  const {addNewItem}=useContext(TodoItemsContext);
 
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const onNewChange=(event)=>{
    event.preventDefault();
  const todName=todoNameElement.current.value;
  const todDate=dueDateElement.current.value;
  todoNameElement.current.value="";
  dueDateElement.current.value="";
    addNewItem(todName, todDate);
   
  }
  return(
  <form className="row kg-row" onSubmit={onNewChange}>
          <div className="col-6">
            <input type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"   />
          </div>
          <div className="col-4">
            <input type ="date" ref={dueDateElement}  />
          </div>
          <div className="col-2"><button type="submit" className="btn btn-success kg-button"
          onClick={onNewChange}
       
          >Add</button></div>
        </form>)

}
export default AddTodo;