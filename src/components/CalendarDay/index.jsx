import "./calendarDay.scss";

function CalendarDay({ dayNumber, dayName }) {
  return (
    <div className="calendar-day">
      <span className="calendar-day__number" style={{ color: "black" }}>
        {dayNumber}
      </span>
    </div>
  );
}

export default CalendarDay;
