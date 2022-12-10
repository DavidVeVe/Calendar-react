import CalendarDay from "../CalendarDay";
import helper from "./calendarGridHelper";
import "./calendarGrid.scss";

const { getDaysForGrid } = helper;

function CalendarGrid({ currentMonthDays, prevMonthDays }) {
  const daysForGrid = getDaysForGrid(currentMonthDays, prevMonthDays).map(
    (day) => {
      const { dayNumber, dayName, isFromPrevMonth } = day;
      return (
        <CalendarDay
          key={dayNumber + dayName}
          dayNumber={dayNumber}
          dayName={dayName}
          isFromPrevMonth={isFromPrevMonth}
        />
      );
    }
  );

  return <section className="calendar-grid">{daysForGrid}</section>;
}

export default CalendarGrid;
