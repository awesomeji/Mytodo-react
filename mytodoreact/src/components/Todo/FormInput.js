import React,{useState,useContext,useEffect,useRef} from 'react'
import { DataContext } from './DataProvider'
export default function FormInput() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput= useRef();
  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName('');
  }
  useEffect(() => {
    todoInput.current.focus();
  } , [])
  return(
    <form className="inputform" autoComplete='off' onSubmit={addTodo}>
      <input type='text' name="todos" id="todos" ref={todoInput} 
      required placeholder='What do you have to do?' 
      value={todoName} onChange={e=>setTodoName(e.target.value)}/>
      <button className="createbutton"type="submit">Create</button>

    </form>
  )
}