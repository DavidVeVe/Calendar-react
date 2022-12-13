import CalendarDay from "../CalendarDay";
import helper from "./calendarGridHelper";
import "./calendarGrid.scss";

const { getDaysForGrid } = helper;

/**
 * @param currentMonthDays {object}
 * @param prevMonthDays {object}
 * @param nextMonthDays {object}
 * @param prevMonthName {string}
 * @param nextMonthName {string}
 * @returns {JSX.Element}
 */
function CalendarGrid({
  currentMonthDays,
  prevMonthDays,
  nextMonthDays,
  prevMonthName,
  nextMonthName,
}) {
  const daysForGrid = getDaysForGrid(
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    prevMonthName,
    nextMonthName
  ).map((day) => {
    const { dayNumber, dayName, isDayDisabled, monthName } = day;
    return (
      <CalendarDay
        key={dayName + Math.random()}
        dayNumber={dayNumber}
        dayName={dayName}
        isDayDisabled={isDayDisabled}
        monthName={monthName}
      />
    );
  });

  return <section className="calendar-grid">{daysForGrid}</section>;
}

export default CalendarGrid;
