import DayEvent from "../DayEvent";
import './calendarDay.scss'

function CalendarDay ({dayNumber, activeMonth, dayEvents, isActive}) {
    const activeEvents = dayEvents.map((event) => {
        return <DayEvent eventData={event} />
    })
    return <div className="calendar-day">
        <span>{dayNumber}</span>
        {activeEvents}
    </div>
}

export default CalendarDay
