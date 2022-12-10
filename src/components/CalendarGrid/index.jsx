import CalendarDay from "../CalendarDay";
import "./calendarGrid.scss";

function CalendarGrid({ currentMonthDays, prevMonthDays }) {
  let { dayIndex } = currentMonthDays;

  if (currentMonthDays.dayIndex === 0) {
    dayIndex = 6;
  } else {
    dayIndex = dayIndex - 1;
  }

  const prevMonthLastDays = prevMonthDays.days.slice(-dayIndex).map((day) => {
    return { ...day, isFromPrevMonth: true };
  });

  const days = prevMonthLastDays.concat(currentMonthDays.days);

  return (
    <section className="calendar-grid">
      {days.map((day) => {
        const { dayNumber, dayName, isFromPrevMonth } = day;
        return (
          <CalendarDay
            key={dayNumber + dayName}
            dayNumber={dayNumber}
            dayName={dayName}
            isFromPrevMonth={isFromPrevMonth}
          />
        );
      })}
    </section>
  );
}

export default CalendarGrid;
