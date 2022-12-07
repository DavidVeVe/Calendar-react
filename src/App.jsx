import CalendarDay from "./components/calendarDay";
import useCalendar from "./hooks/calendar/useCalendar";
import './App.css'

function App() {
    const [{ navigationEvents: { getNextMonth, getPreviousMonth }, date, monthDaysConfig, monthName, prevMonthName, prevMonthDaysConfig }] = useCalendar()

  return (
    <div className="App" >
        <button onClick={getPreviousMonth}>Previous month</button>
        <button onClick={getNextMonth}>Month ahead</button>
        {date.getFullYear()}
        <p>previous: {prevMonthName}</p>
        <p>current: {monthName}</p>

        <section className="calendar-days">
            {monthDaysConfig.map((day) => {
                const {dayNumber, dayName } = day
                return <CalendarDay key={dayNumber} dayNumber={dayNumber} dayName={dayName} />
        })}
        </section>
    </div>
  )
}


export default App
