import './App.css';
import { useState, useEffect, useRef } from 'react';
import ProgressBar from "@ramonak/react-progress-bar";
import morningPic from './img/morning.png'
import nightPic from './img/night.jpg'
import HeaderComponent from './Components/HeaderComponent';
import AddItemComponent from './Components/AddItemComponent';
import ToDoItemsComponent from './Components/ToDoItemsComponent';
import { Animate } from "react-simple-animate";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked] = useState(false);
  const ref = useRef(null);
  const [progPercent, setProgPercent] = useState(1);
  const [date, setDate] = useState()
  const [timePeriod, setTimePeriod] = useState()
  const [backgroundImg, setBackgroundImg] = useState();
  const [finishTaskCount, setFinishTaskCount] = useState()
  const [play, setPlay] = useState(false);
  
  const calculateFinishTask = () => {
    let taskCount = 0;
    if (todoList.length >= 1) {
      for (let i in todoList) {
        if (todoList[i].done) {
          taskCount+= 1;
        }
      }
    }
    setFinishTaskCount(taskCount);
    setProgPercent(Math.round((taskCount / todoList.length) * 100));
  }
  useEffect(() => {
    calculateFinishTask();
    console.log(todoList.length)
    console.log(finishTaskCount)
    dateFormat();
  }, [todoList, finishTaskCount]);

  //Adding item to the todo List
  const addItem = () => {
    if (todoItem !== "") {
      setPlay(true);
      setTodoList(current => [...current,
        {
          todoItem : todoItem,
          done : checked
        }
      ]);
      ref.current.value = '';
      setTodoItem("");
    }
    else{
      alert('Add item should not be blank.')
    }
  }

  const dateFormat = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let monthName = months[month];
    let year = d.getFullYear();
    let time = d.getHours();
    if ( time <= 4 || time >= 20){
      setTimePeriod("Good Night!")
      setBackgroundImg(nightPic)
    }
    else if (4< time && time <= 11) {
      setTimePeriod("Good Morning!");
      setBackgroundImg(morningPic)
    }
    else if (11 < time && time <= 16) {
      setTimePeriod("Good Afternoon!");
      setBackgroundImg(morningPic)
    }
    else if (16 < time && time < 20) {
      setTimePeriod("Good Evening!");
      setBackgroundImg(nightPic)
    }
    setDate(`${date}-${monthName}-${year}`);
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
      <div className='todoapp-container'>
        <HeaderComponent backgroundImg = {backgroundImg} timePeriod = {timePeriod} date={date} />
        <AddItemComponent setTodoItem={setTodoItem} addItem={addItem} ref1={ref}/>
        <div className='progress-container'>
          <p>Progress: </p>
          <ProgressBar 
            completed={progPercent} 
            className='progress-bar'
          />
        </div>
        
        {
          todoList.length - finishTaskCount === 0 &&
          <p className='add-line'>Add some tasks to your list.</p>
        }
        {
          todoList.length - finishTaskCount !== 0 &&
          <p className='add-line'>{todoList.length - finishTaskCount} tasks left to do.</p>
        }
        {todoList?.map((todo, index) => {
          return(
            <Animate
              key={index}
              play={play}
              start={{
                transform: "translateY(-100px)"
              }}
              end={{ transform: "translateY(0px)" }}
            >
              <div className={`${!todo.done ? 'todoItemContainer': 'disappear'}`}>
                {!todo.done &&
                  <ToDoItemsComponent play={play} index ={index} todo={todo} finishTask={finishTask} deleteTodo={deleteTodo} />
                }
              </div>
            </Animate>
            
          )
        })}
        {finishTaskCount >= 1 && 
          <span className='add-line'>Completed: {finishTaskCount} / {todoList.length}</span>
        }
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
    </div>
  );
}

export default App;

