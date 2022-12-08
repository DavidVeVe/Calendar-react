import CalendarDay from "../CalendarDay";
import "./calendarGrid.scss";

function CalendarGrid({ daysInCurrentMonth }) {
  return (
    <section className="calendar-grid">
      {daysInCurrentMonth.map((day) => {
        const { dayNumber } = day;
        return <CalendarDay dayNumber={dayNumber} />;
      })}
    </section>
  );
}

export default CalendarGrid;
