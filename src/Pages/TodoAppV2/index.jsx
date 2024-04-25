import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import ButtonUi from '../../Components/ButtonUi';

function ToDoAppV2() {
    const [state, setState] = useState({
        todoItem: '', // Store for the current input
        todoList: [], // Store for the list of todos
    });
    function handleRemoveItem(id) {
        setState({ ...state, todoList: state.todoList.filter(item => item.id !== id) });
    }

    function handleAddItem() {
        if (state.todoItem) {
            // Only add item if there is some text
            const newItem = {
                id: state.todoList.length,
                item: state.todoItem,
            };
            setState({ todoItem: '', todoList: [...state.todoList, newItem] });
        }
    }

    return (
        <>
            <div className='container mt-32 md:w-3/6 lg:1/6 mx-auto flex flex-col justify-content-center align-middle gap-y-3 bg-lightPink rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out p-8' >

                <div className='mx-auto flex flex-col justify-content-center align-middle '>
                    <a></a>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <h1>To Do App</h1>
                <div className="card">
                    <input
                        type="text"
                        name="todoItem" // Correctly setting the name attribute
                        value={state.todoItem} // Control component
                        onChange={(event) =>
                            setState({ ...state, todoItem: event.target.value })
                        }
                    />
                    <ButtonUi onClick={handleAddItem}>Add Item</ButtonUi>
                </div>
                <div>
                    {/* <p>{todoList && "Click item name to remove"}</p> */}
                    <p>Total Items in List: {state.todoList.length}</p>
                    {state.todoList.map((item) => (
                        <p key={item.id}>
                            <ButtonUi onClick={() => handleRemoveItem(item.id)}>
                                {item.item}
                            </ButtonUi>
                        </p>
                    ))}
                </div>
            </div>

        </>
    );
}

export default ToDoAppV2;
