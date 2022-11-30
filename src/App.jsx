import { useState } from 'react'
import CalendarDay from "./components/calendarDay";
import './App.css'

function App() {
    const [date, setDate] = useState(new Date())

    const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]
    console.log({month})
    console.log({day})
    console.log({year})
  return (
    <div className="App" >
        <button onClick={() => {
            setDate(101013938383)
        }}>change date</button>
        {date.toDateString()}
    </div>
  )
}

export default App
