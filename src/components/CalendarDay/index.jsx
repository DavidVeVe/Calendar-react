import "./calendarDay.scss";

function CalendarDay({ dayNumber, dayName }) {
  return (
    <div className="calendar-day">
      <span className="calendar-day__number" style={{ color: "black" }}>
        <span style={{position: "relative", top: "-25px", color: "white"}}>{dayName}</span>
        <span>{dayNumber}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
