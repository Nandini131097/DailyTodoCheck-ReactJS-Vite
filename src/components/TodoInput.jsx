import React, { useState } from 'react';

export default function TodoInput({ handleTodos,setTodoInputValue, todoinputValue}) { // Destructure handleTodos directly
  // const [todoinputValue, setTodoInputValue] = useState(""); // Correct state update function

  const handleChange = (event) => {
    setTodoInputValue(event.target.value); // Correctly update state
  };

  const handleAddClick = () => {
    if (todoinputValue.trim()) { // Check for non-empty input
      handleTodos(todoinputValue); // Call the passed function
      setTodoInputValue(""); // Clear the input field
    }
  };

  return (
    <div className='container'>
      <input
        value={todoinputValue}
        onChange={handleChange} // Use the handler function
        placeholder='Please Enter task'
      />
      <button className='add' onClick={handleAddClick}>Add</button> {/* Use the handler function */}
    </div>
  );
}
