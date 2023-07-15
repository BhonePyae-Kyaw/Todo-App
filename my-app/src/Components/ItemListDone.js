import React from 'react'
import ToDoItemsComponent from './ToDoItemsComponent'
import { Animate } from 'react-simple-animate'

export default function ItemListDone({todoList,play,finishTask,deleteTodo}) {
  return (
    <div>
        {todoList?.map((todo, index) => {
          return(
            <Animate
              key={index}
              play={play}
              start={{
                transform: "translateY(-200px)"
              }}
              end={{ transform: "translateY(0px)" }}
            >
              <div className={`${todo.done ? 'todoItemContainerFinish': 'disappear'}`}>
                {todo.done &&
                  <ToDoItemsComponent play={play} index ={index} todo={todo} finishTask={finishTask} deleteTodo={deleteTodo} />
                }
              </div>
            </Animate>
            
          )
        })}
    </div>
  )
}
