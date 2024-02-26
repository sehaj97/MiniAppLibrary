import { useState } from "react"
import ToDoList from "../../Components/ToDoList";

export default function ToDoApp() {
    const [todoList, setTodoList] = useState([])
    const [formData, setFormData] = useState({
        id: "",
        item: ''
      });
    function handleChange(event){
        setFormData(
            {
                id: todoList.length,
                [event.target.name]: event.target.value
            }
        )
    }
    function handleSubmit(event){
        event.preventDefault();
        if (formData.item === '') return;
        setTodoList([
            ...todoList,
            formData
        ]);

        setFormData(
            {
                id: "",
                item: ''
            }
        )
    }
    return (
        <div className='container flex flex-col gap-y-3 bg-lightPink rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-8' >
        <h1>ToDo List</h1>
        <form className="flex gap-y-3" onSubmit={handleSubmit}>
            <input 
            type="text" 
            className="text-lightWhite rounded mx-2 bg-slate-700 text-white" 
            name="item" 
            value={formData.item} 
            onChange={handleChange}/>
            <button className="block w-full rounded-md bg-indigo-600 px-3 text-center text-3xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> + </button>
        </form>

        <button className="bg-grayBlue" onClick={()=> setTodoList([])}>RESET</button>
        <ToDoList todoList={todoList}/>
        </div>
    )
}
