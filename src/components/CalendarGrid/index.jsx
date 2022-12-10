import CalendarDay from "../CalendarDay";
import "./calendarGrid.scss";

function CalendarGrid({ currentMonthDays, prevMonthDays }) {
  let {dayIndex} = currentMonthDays

  if (currentMonthDays.dayIndex === 0) {
    dayIndex = 6
  } else {
    dayIndex = dayIndex - 1
  }

  const days = prevMonthDays.days.slice(-dayIndex).concat(currentMonthDays.days)

  return (
    <section className="calendar-grid">
      {days.map((day) => {
        const { dayNumber, dayName } = day;
        return <CalendarDay key={dayNumber + dayName} dayNumber={dayNumber} dayName={dayName} />;
      })}
    </section>
  );
}

export default CalendarGrid;
