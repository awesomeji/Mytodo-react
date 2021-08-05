import React,{useContext,useState} from 'react'
import {DataContext} from './DataProvider'
export default function Footer () {
  const[checkAll,setCheckAll] = useState(false)
  const[todos,setTodos] = useContext(DataContext)
  const completedTodo=todos.filter(todos => todos.complete===false)
  console.log(completedTodo)
  const handleCheckAll= () => {
    const newTodos =[...todos]
    newTodos.forEach(todo => {
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const deleteTodo = () => {
    const newTodos = todos.filter(todo =>{
      return todo.complete === false
    })
    setTodos(newTodos)
    setCheckAll(false)

 }  
  
  

 return(
   <>
   {
      todos.length === 0 ? <h2>What do you want to do?</h2>
      :
    <div className="row">
        <label htmlFor="all">
          <input type="checkbox" id="all" name="all" onChange={handleCheckAll} clicked={checkAll}/>
          All
        </label>
        <p>you have {completedTodo.length} thing(s) to do</p>
        <button id="delete" onClick={deleteTodo}>Delete</button>
      </div>
   }
   </>
  )
}