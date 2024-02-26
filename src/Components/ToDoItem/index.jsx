import React, { useState } from 'react';

export default function ToDoItem({ id, item }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the isChecked state
  };

  return (
    <div className="relative flex items-center gap-3 py-3 px-5 bg-white rounded-md shadow-md transition-all hover:shadow-lg">
      <input
        type="checkbox"
        className="h-6 w-6 border-gray-300 rounded-md checked:bg-blue-500 checked:border-transparent focus:ring-0"
        id={`todo-${id}`}
        value={item}
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label
        htmlFor={`todo-${id}`}
        className={`flex-grow ${isChecked ? 'line-through text-gray-500' : 'text-gray-800'}`}
      >
        {item}
      </label>
    </div>
  );
}
