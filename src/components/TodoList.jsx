import React, { useState } from "react"
import './TodoList.css';
import { MdCancel } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { CgEditMarkup } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";
import { IoPersonRemove } from "react-icons/io5";
import { IoIosDoneAll } from "react-icons/io";
import { FiUserCheck } from "react-icons/fi";



function TodoList() {

       const[todos, setTodos] = useState([])
       const[inputValue, setInputValue] = useState('')
       const[editIndex, setEditIndex] = useState(-1)


       const addTodo=() => {
        if(inputValue.trim() !== ''){
           if(editIndex !== -1){
           const updatedTodos = [...todos]
           updatedTodos[editEndex]={task: inputValue, completed: updateTodos[editIndex].completed}
           setTodos(updatedTodos)
           setInputValue('')
           setEditIndex(-1)
           }else{
            setTodos([...todos, {task: inputValue,completed: false}])
            setInputValue('')
           }
           }
           }
        
           const startEdit =(index) => {
      // setInputValue(todos[index].task)
      setEditIndex(index)
     }      

const cancelEdit = () =>{
  setInputValue('')
  setEditIndex(-1)
}

 const removeTodo = (index) =>{
  const updatedTodos = todos.filter((_, i) => i !== index)
  setTodos(updatedTodos)
 }

 const toggleCompleted = (index) => {
  const updatedTodos = [... todos]
  updatedTodos[index].completed = !updatedTodos[index].completed
 }



  return (
      <div className="Home">
        <h3>
          New employe entry data recording
        </h3>
         <div className="Name">
          Full Name
         </div>
        <div className="display">
          <input type="text" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} 
          placeholder="Enter employe name her"
          className="input"/>
          {editIndex !== -1 ? (
          <>
          <button onClick={addTodo} className="update-btn"><GrUpdate /></button>
          <button onClick={cancelEdit} className="cancel-btn"><MdCancel /></button>
           </>) : (
             <button onClick={addTodo} className="Add-btn">Add</button>
           )}
         </div>
          <ul className="new">
            new members list
           {todos.map((todo,index) => (
            <li key={index} className={todo.completed ? 'completed' : ''}>
              {todo.task}
              <div className="bty">
                 <button onClick={startEdit} className="edit btn"><CiEdit /></button>
                 <button onClick={removeTodo} className="remove btn"><IoPersonRemove /></button>
                 {/* <button className="done btn" onClick={() => toggleCompleted(index)}>
                  {todo.completed ? <BiReset /> : <FiUserCheck />}
                 </button> */}


              </div>
            </li>
           ))

           }
          </ul>
        
      </div>
  )
}



export default TodoList;