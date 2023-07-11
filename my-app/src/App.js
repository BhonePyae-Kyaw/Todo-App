import './App.css';
import { useState } from 'react';

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [finishList, setFinishList] = useState([]);
  const addItem = () => {
    setTodoList(current => [...current, {todoItem : todoItem}]);
    console.log(todoList)
  }
  const deleteTodo = (index) => {
    todoList.splice(index,1);
    setTodoList(() => ([...todoList]))
  }
  const finishTask = (e) => {
    console.log(e)
    setFinishList(current => [...current, {itemFinished : e.todo.todoItem}]);
    console.log('finish task')
    console.log(finishList)
  }
  return (
    <div className="App">
      <h1>Hello World !</h1>
      <input type='text' placeholder='Add a todo to your list:  ' onChange={(e) => setTodoItem(e.target.value)}/>
      <button onClick={addItem}>Add</button>
      <br />
      {todoList?.map((todo, index) => {
        return(
          <div key={index}>
            <input type='checkbox' onClick={(e) => finishTask({todo})} />
            <span>{index + 1} {todo.todoItem}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
          
        )
      })}
    </div>
  );
}

export default App;
