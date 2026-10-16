import {createContext} from "react";
import {useReducer} from "react";

export const TodoItemsContext= createContext();

const todoItemsReducer=(currTodoItems,action)=>{

  let newTodo=currTodoItems;
  if(action.type==="NEW_ITEM"){
     newTodo={todoName:action.payload.todoName,todoDate:action.payload.todoDate};
    return [...currTodoItems,newTodo];
  }
  if(action.type==="DELETE_ITEM"){
    const updatedTodos = currTodoItems.filter(
      (todo) => todo.todoName !== action.payload.todoName
    );
    return updatedTodos;
  }
  
}

const TodoItemsContextProvider=({children})=>{
  const[todos,dispatcTodoItems]=useReducer(todoItemsReducer,[]);


  const addNewItem = (todoName, todoDate) => {
     const newItemAction={
    type:"NEW_ITEM",
    payload:{todoName,todoDate}
  }
    dispatcTodoItems(newItemAction);

  };
 

 const deleteItem = (todoName) => {
    const deleteItemAction={
      type:"DELETE_ITEM",
      payload:{todoName}
    }
    dispatcTodoItems(deleteItemAction);
   
 };  return (
  < TodoItemsContext.Provider value=
  {{todoItems:todos,
    addNewItem:addNewItem,
    deleteItem:deleteItem


   }}
   > {children} </TodoItemsContext.Provider>


 )

}

export default TodoItemsContextProvider;