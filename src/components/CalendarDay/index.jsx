import "./calendarDay.scss";

function CalendarDay({ dayNumber, dayName, isFromPrevMonth }) {
    const getClassNames = (condition) => {
        const initialClassName = 'calendar-day'
        condition ? `${initialClassName}--is-from-prev-month` : initialClassName
    }

  return (
    <div className="calendar-day">
      <span className="calendar-day__number">
        <span>{dayName}</span>
        <span>{dayNumber}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
