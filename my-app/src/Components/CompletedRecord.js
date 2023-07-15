import React from 'react'

export default function CompletedRecord({finishTaskCount, todoList}) {
  return (
    <div>
        {finishTaskCount >= 1 && 
          <span className='complete-line'>Completed: {finishTaskCount} / {todoList.length}</span>
        }
    </div>
  )
}
