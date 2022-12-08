import CalendarDay from "./components/CalendarDay";
import useCalendar from "./hooks/calendar/useCalendar";
import {useState} from "react";
import Calendar from "./calendar";
import './App.css'

function App(date1 = date) {

  const [date, setDate] = useState(new Date())

  return (
    <div className="App" >
      <Calendar date={date1} />
    </div>
  )
}


export default App
