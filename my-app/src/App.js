import './App.css';
import { useState, useEffect, useRef } from 'react';

//images
import morningPic from './img/morning2.jpg'
import nightPic from './img/night.jpg'

//components
import HeaderComponent from './Components/HeaderComponent';
import AddItemComponent from './Components/AddItemComponent';
import ProgressBarComp from './Components/ProgressBarComp';
import InstructionComp from './Components/InstructionComp';
import ItemList from './Components/ItemList';
import CompletedRecord from './Components/CompletedRecord';
import ItemListDone from './Components/ItemListDone';

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [checked] = useState(false);
  const [progPercent, setProgPercent] = useState(1);
  const [date, setDate] = useState()
  const [timePeriod, setTimePeriod] = useState()
  const [backgroundImg, setBackgroundImg] = useState();
  const [finishTaskCount, setFinishTaskCount] = useState()
  const [play, setPlay] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    calculateFinishTask();
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

  //Calculate how many tasks have finished.
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

  //Caclulate for displaying date and time period.
  const dateFormat = () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let monthName = months[month];
    let year = d.getFullYear();
    let time = d.getHours();
    let Day = d.getDay();
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
    setDate(`${date} ${monthName} ${year} (${days[Day]})`);
  }

  return (
    <div className="App">
      <div className='todoapp-container'>
        <HeaderComponent backgroundImg = {backgroundImg} timePeriod = {timePeriod} date={date} />
        <AddItemComponent setTodoItem={setTodoItem} addItem={addItem} ref1={ref}/>
        <ProgressBarComp progPercent={progPercent} />
        <InstructionComp todoList={todoList} finishTaskCount={finishTaskCount} />
        <ItemList todoList={todoList} play={play} finishTask={finishTask} deleteTodo={deleteTodo}/>
        <CompletedRecord finishTaskCount={finishTaskCount} todoList={todoList} />
        <ItemListDone todoList={todoList} play={play} finishTask={finishTask} deleteTodo={deleteTodo} />
      </div>  
    </div>
  );
}
export default App;

