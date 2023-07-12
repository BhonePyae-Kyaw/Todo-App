import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked] = useState(false);

  useEffect(() => {
    calculateFinishTask();
  }, [todoList])

  const calculateFinishTask = () => {
    let taskCount = 0;
    if (todoList.length > 1) {
      for (let i in todoList) {
        if (todoList[i].done) {
          taskCount+= 1;
        }
      }
    }
    return (taskCount / todoList.length) * 100;
  }


  //Adding item to the todo List
  const addItem = () => {
    setTodoList(current => [...current,
      {
        todoItem : todoItem,
        done : checked
      }
    ]);
  }

  //Deleting item from the todo List
  const deleteTodo = (index) => {
    todoList.splice(index,1);
    setTodoList(() => ([...todoList]))
  }

  //Finish the task with check box
  const finishTask = (index, done) => {
    let temp = todoList[index];
    temp.done = !done;
    let todosClone = [...todoList];
    todosClone[index] = temp;
    setTodoList([...todosClone]);
  }

  return (
    <div className="App">
      <h1>Hello World !</h1> 
      <h4>{calculateFinishTask()} % done.</h4>
      <input 
        type='text' 
        placeholder='Add a todo to your list:  ' 
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <br />
      {todoList?.map((todo, index) => {
        return(
          <div key={index}>
            <input 
              type='checkbox' 
              onChange={() => finishTask(index, todo.done)} 
              checked={todo.done} 
            />
            <span className={`${todo.done ? 'checked' : ''}`}>{index + 1} {todo.todoItem}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
          
        )
      })}
    </div>
  );
}

export default App;

