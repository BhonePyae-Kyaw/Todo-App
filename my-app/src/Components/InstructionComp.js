import React from 'react'

export default function InstructionComp({todoList, finishTaskCount}) {
  return (
    <div>
        {
          todoList.length - finishTaskCount === 0 &&
          <p className='add-line'>Add some tasks to your list.</p>
        }
        {
          todoList.length - finishTaskCount !== 0 &&
          <p className='add-line'>{todoList.length - finishTaskCount} tasks left to do.</p>
        }
    </div>
  )
}
