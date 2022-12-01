import { useState } from 'react'
import CalendarDay from "./components/calendarDay";
import useCalendar from "./hooks/calendar/useCalendar";
import './App.css'

function App() {
    // const [month, setMonth] = useState(new Date().getMonth())
    // const [day, setDay] = useState(new Date().getDate())

    // const [day, setDay] = useState(new Date().getDate())
    // const [day, setDay] = useState(new Date().getDay())
    // const [year, setYear] = useState(new Date().getFullYear())
    // console.log({year})
    // console.log({month})
    // console.log({day})
    // const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

    // const getDays = (year, m) => {
    //     return new Date(year, m, 0).getDate();
    // };

const [{ navigationEvents: { getNextMonth, getPreviousMonth }, date, month, year },dispatch] = useCalendar()
    console.log(date)

  return (
    <div className="App" >
        <button onClick={getPreviousMonth}>Previous month</button>
        <button onClick={getNextMonth}>Month ahead</button>
        {date.toLocaleString('default', { month: 'long' })}
        {date.getFullYear()}
    </div>
  )
}


export default App
