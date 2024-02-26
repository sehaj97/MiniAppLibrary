
import ToDoItem from "../ToDoItem";
export default function ToDoList ({todoList}){
   return todoList.map(
    (todoItem, index) => (<ToDoItem key={index} id={todoItem.id} item={todoItem.item} />))
}