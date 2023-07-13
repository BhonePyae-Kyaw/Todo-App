import './App.css';
import { useState, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import morningPic from './img/morning.png'
import HeaderComponent from './Components/HeaderComponent';
import AddItemComponent from './Components/AddItemComponent';
import ToDoItemsComponent from './Components/ToDoItemsComponent';

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked] = useState(false);
  const ref = useRef(null);
  const [progPercent, setProgPercent] = useState(1);
  const [date, setDate] = useState()
  const [timePeriod, setTimePeriod] = useState()
  
  const calculateFinishTask = () => {
    let taskCount = 0;
    if (todoList.length >= 1) {
      for (let i in todoList) {
        if (todoList[i].done) {
          taskCount+= 1;
        }
      }
    }
    setProgPercent(Math.round((taskCount / todoList.length) * 100));
  }
  useEffect(() => {
    calculateFinishTask();
    dateFormat();
  }, [todoList]);

  //Adding item to the todo List
  const addItem = () => {
    setTodoList(current => [...current,
      {
        todoItem : todoItem,
        done : checked
      }
    ]);
    ref.current.value = '';
    setTodoItem("");
  }

  const dateFormat = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let monthName = months[month];
    let year = d.getFullYear();
    let time = d.getHours();
    if ( time < 4 || time > 20){
      setTimePeriod("Good Night!")
    }
    else if (4< time < 12) {
      setTimePeriod("Good Morning!");
    }
    else if (12 < time < 16) {
      setTimePeriod("Good Afternoon.")
    }
    else if (16 < time < 20) {
      setTimePeriod("Good Evening!")
    }
    setDate(`${date}-${monthName}-${year}`)
  }

  //Deleting item from the todo List
  const deleteTodo = (index) => {
    todoList.splice(index,1);
    setTodoList(() => ([...todoList]))
  }

  //Finish the task with check box
  const finishTask = (index, done) => {
    todoList[index].done = !done;
    setTodoList([...todoList]);
  }

  return (
    <div className="App">
      <HeaderComponent morningPic = {morningPic} timePeriod = {timePeriod} date={date} />
      <AddItemComponent setTodoItem={setTodoItem} addItem={addItem} ref1={ref}/>
      <ProgressBar completed={progPercent}/>
      
      {todoList?.map((todo, index) => {
        return(
          <div key={index} className='todoItemContainer'>
            <ToDoItemsComponent index ={index} todo={todo} finishTask={finishTask} deleteTodo={deleteTodo} />
          </div>
        )
      })}
    </div>
  );
}

export default App;

