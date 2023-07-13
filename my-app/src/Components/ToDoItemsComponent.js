import React from 'react'
import './ToDoItems.css'

export default function ToDoItemsComponent({todo, index, finishTask, deleteTodo}) {
  return (
    <>
        <input 
            type='checkbox' 
            onChange={() => finishTask(index, todo.done)} 
            checked={todo.done} 
        />
        <span className={`${todo.done ? 'checked' : ''}`}>{index + 1} {todo.todoItem}</span>
        <button onClick={() => deleteTodo(index)}>Delete</button>  
    </>
  )
}
