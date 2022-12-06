import DayEvent from "../DayEvent";
import './calendarDay.scss'

function CalendarDay ({dayNumber, dayName, activeMonth, dayEvents, isActive}) {
    return (
        <div className="calendar-day__wrapper">
            <span>{dayName}</span>
            <div className="calendar-day">
                <span className="calendar-day__number" style={{color: "black"}}>{dayNumber}</span>
            </div>
        </div>
    )
}

export default CalendarDay
