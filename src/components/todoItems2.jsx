import TodoItems from "./TodoItems";
import styles from "./todoItems2.module.css";


const Todoitems=({todoitem})=>{
  return(
   <div className={styles.itemContainer}>
     {todoitem.map((item) => (
       <TodoItems todoName={item.todoName} todoDate={item.todoDate} />
     ))}
    </div>
  )
}

export default Todoitems;