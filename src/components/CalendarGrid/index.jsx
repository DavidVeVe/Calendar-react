import CalendarDay from "../CalendarDay";
import "./calendarGrid.scss";

function CalendarGrid({ daysInCurrentMonth, daysInPrevMonth }) {

  const days = daysInPrevMonth.concat(daysInCurrentMonth)

  return (
    <section className="calendar-grid">
      {days.map((day) => {
        const { dayNumber } = day;
        return <CalendarDay key={dayNumber} dayNumber={dayNumber} />;
      })}
    </section>
  );
}

export default CalendarGrid;
