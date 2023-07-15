import React from 'react'
import './ToDoItems.css'
import { RiDeleteBackLine } from "react-icons/ri";

export default function ToDoItemsComponent({todo, index, finishTask, deleteTodo}) {
  return (
    <div className='todoitem-container'>
      <div>
        <input
              type='checkbox'
              onChange={() => finishTask(index, todo.done)} 
              checked={todo.done} 
              className='checkbox-btn'
        />
        <span className={`${todo.done ? 'checked' : ''}`}>{todo.todoItem}</span>
      </div>
      <div onClick={() => deleteTodo(index)}>
        <span className='delete-btn'><RiDeleteBackLine /></span>  
      </div>
    </div>
    
  )
}
