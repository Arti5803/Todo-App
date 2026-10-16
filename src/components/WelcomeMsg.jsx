import {useContext} from "react";
import {TodoItemsContext} from "../store/todo-item-store";


const WelcomeMsg = () => {
  const {todoItems} = useContext(TodoItemsContext);

  return (
    <div>
      
   {todoItems.length === 0 && <p>Enjoy your day</p>}
    </div>
  );
};

export default WelcomeMsg;