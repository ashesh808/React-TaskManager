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
  console.log('delete', id)
}

  return ( 

    <div className = "container" >
    <Header title = "Task Tracker"/ >
    <Tasks tasks = {tasks}  onDelete= {deleteTask} / >
    </div>

  );
}


export default App;