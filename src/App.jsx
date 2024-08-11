import { useState,useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [mytodolist, setTodolist] = useState([]);
  const [todoinputValue, setTodoInputValue] = useState("");

  function persistData(newList){
    localStorage.setItem('mytodolist', JSON.stringify({mytodolist:newList}))
  }

  function handleTodos(newTodos) {
    const newtodoList = [...mytodolist, newTodos];
    persistData(newtodoList);
    setTodolist(newtodoList);
  }

  function handleToDelete(index) {
    const newtodoList = mytodolist.filter((_, todoindex) => todoindex !== index);
    persistData(newtodoList);
    setTodolist(newtodoList);
    
  }

  function handleToEdit(index){
    const valuetoEdit = mytodolist[index]
    setTodoInputValue(valuetoEdit);

    setTimeout(() => {
      handleToDelete(index)
    }, 500);

  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos= localStorage.getItem('mytodolist');
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).mytodolist
    setTodolist(localTodos)
  },[])

  return (
    <div>
    <TodoInput handleTodos={handleTodos} todoinputValue={todoinputValue} setTodoInputValue={setTodoInputValue}/>
      <TodoList todolist={mytodolist} handleToDelete={handleToDelete} handleToEdit={handleToEdit}/> {/* Pass handleToDelete here */}
    </div>
  );
}

export default App;
