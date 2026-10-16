import {useContext} from "react";
import {TodoItemsContext} from "../store/todo-item-store";


function TodoItems({  onDeleteClick }) {
  const contextObj= useContext(TodoItemsContext);

  const todoitem=contextObj.todoItems;
  const {deleteItem}=contextObj;
 

  
  return (
    <div className="container">
      {(todoitem ?? []).map((todo) => (
        <div className="row kg-row" key={todo.todoName}>
          <div className="col-6">
            {todo.todoName}
          </div>

          <div className="col-4">
            {todo.todoDate}
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger kg-button"
              onClick={() => deleteItem(todo.todoName)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItems;