import CalendarDay from "../CalendarDay";
import helper from "./calendarGridHelper";
import "./calendarGrid.scss";

const { getDaysForGrid } = helper;

/**
 * @param currentMonthDays {object}
 * @param prevMonthDays {object}
 * @param nextMonthDays {object}
 * @returns {JSX.Element}
 */
function CalendarGrid({ currentMonthDays, prevMonthDays, nextMonthDays }) {
  const daysForGrid = getDaysForGrid(
    currentMonthDays,
    prevMonthDays,
    nextMonthDays
  ).map((day) => {
    const { dayNumber, dayName, isDayDisabled } = day;
    return (
      <CalendarDay
        key={dayName + Math.random()}
        dayNumber={dayNumber}
        dayName={dayName}
        isDayDisabled={isDayDisabled}
      />
    );
  });

  return <section className="calendar-grid">{daysForGrid}</section>;
}

export default CalendarGrid;
