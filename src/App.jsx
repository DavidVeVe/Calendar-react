import { useState } from 'react'
import CalendarDay from "./components/calendarDay";
import './App.css'

function App() {
    const [date, setDate] = useState(new Date())
    // const [month, setMonth] = useState(new Date().getMonth())
    // const [day, setDay] = useState(new Date().getDate())

    // const [day, setDay] = useState(new Date().getDate())
    // const [day, setDay] = useState(new Date().getDay())
    // const [year, setYear] = useState(new Date().getFullYear())
    // console.log({year})
    // console.log({month})
    // console.log({day})
    // const [month, day, year] = [date.getMonth(), date.getDate(), date.getFullYear()]

    const getDays = (year, m) => {
        return new Date(year, m, 0).getDate();
    };

    // console.log(new Date(2022, month, day))


  return (
    <div className="App" >
        {/*<button onClick={() => {*/}
        {/*    setMonth(month - 1)*/}
        {/*    setDate(new Date(year, month - 1,  day))*/}
        {/*}}>Previous month</button>*/}
        {/*<button onClick={() => {*/}
        {/*    setMonth(month + 1)*/}
        {/*    setDate(new Date(year, month + 1,  day))*/}
        {/*}}>Month ahead</button>*/}
        {/*{date.toLocaleString('default', { month: 'long' })}*/}
        {/*{date.getFullYear()}*/}
    </div>
  )
}


export default App
