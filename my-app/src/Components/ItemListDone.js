import React from 'react'
import ToDoItemsComponent from './ToDoItemsComponent'

export default function ItemListDone({todoList,play,finishTask,deleteTodo}) {
  return (
    <div>
        {todoList?.map((todo, index) => {
          return(
            <div className={`${todo.done ? 'todoItemContainerFinish': 'disappear'}`}>
              {todo.done &&
                <ToDoItemsComponent play={play} index ={index} todo={todo} finishTask={finishTask} deleteTodo={deleteTodo} />
              }
            </div>
          )
        })}
    </div>
  )
}
