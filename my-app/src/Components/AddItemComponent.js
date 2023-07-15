import React from 'react'
import './AddItemComponent.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { VscAdd } from "react-icons/vsc";

export default function AddItemComponent({setTodoItem, ref1, addItem}) {
  return (
    <div className='inputContainer'>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder='Add a todo to your list:  ' 
          onChange={(e) => setTodoItem(e.target.value)}
          ref = {ref1} 
        />
        <div className="input-group-append">
          <span 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={addItem}
          >
            <VscAdd/>
          </span>
        </div>
      </div>
    </div>
  )
}