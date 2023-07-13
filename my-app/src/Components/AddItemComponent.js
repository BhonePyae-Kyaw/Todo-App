import React from 'react'
import './AddItemComponent.css'
import { VscAdd } from "react-icons/vsc";

export default function AddItemComponent({setTodoItem, ref1, addItem}) {
  return (
    <div className='inputContainer'>
        <input 
            type='text' 
            placeholder='Add a todo to your list:  ' 
            onChange={(e) => setTodoItem(e.target.value)}
            ref = {ref1}
        />
        <button onClick={addItem}><VscAdd/></button>
    </div>
  )
}