import {
  useState
} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([{
      id: 1,
      text: 'IELTS',
      day: 'Feb 25, 2021',
      reminder: true
    },
    {
      id: 2,
      text: 'Speaking',
      day: 'Feb 26, 2021',
      reminder: true
    }, {
      id: 3,
      text: 'VA',
      day: 'May 25, 2021',
      reminder: false
    }
  ])

  //Delete Tasks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==
      id))
  }
  //Toogle Remainder
  const toogleRemainder = (id) =>  {
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: !task.reminder} : task))
  }


  return (

    <div className = "container" >
    <Header title = "Task Tracker"/ >
    {tasks.length > 0 ? (<Tasks tasks = {tasks}  onDelete= {deleteTask} onToggle= {toogleRemainder}/>) : ('No task to show here') }
    </div>
        );
      }


      export default App;