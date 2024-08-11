import React from 'react';
import TodoCard from './TodoCard';

export default function TodoList({ todolist, handleToDelete,handleToEdit}) { // Destructure handleToDelete directly
  return (
    <div className='taskList'>
      <ul>
      
        {todolist.map((todo, todoindex) => (
          <TodoCard className='todoItem'
            key={todoindex} 
            handleToDelete={handleToDelete}// Pass handleToDelete explicitly
            handleToEdit={handleToEdit} 
            index={todoindex}
          ><p>{todo}</p><div className='btn'></div></TodoCard>
        ))}
      </ul>
    </div>
  );
}
