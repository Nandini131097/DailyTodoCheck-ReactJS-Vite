import React from 'react';

export default function TodoCard({ children, handleToDelete, index,handleToEdit}) {
  return (
    <div>
      <li className='list'>
        {children}
        <div  className='btn'>

        <button class='iconbtn' onClick={()=>handleToEdit
          (index)}>

            <i id="icon1" className="fa-solid fa-pen-to-square" />

          </button>

          <button  class='iconbtn' onClick={() => handleToDelete(index)}>

            <i id="icon2" className="fa-solid fa-trash" />

          </button>

        </div>   
      </li>
    </div>
  );
}
