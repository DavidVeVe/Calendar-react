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
 * @param currentMonthName {string}
 * @param activeDay {number}
 * @param presentDateObj {object}
 * @param calendarEvents {array}
 * @returns {JSX.Element}
 */
function CalendarGrid({
  currentMonthDays,
  prevMonthDays,
  nextMonthDays,
  prevMonthName,
  nextMonthName,
  currentMonthName,
  activeDay,
  presentDateObj,
  calendarEvents,
}) {
  const daysForGrid = getDaysForGrid(
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    prevMonthName,
    nextMonthName,
    currentMonthName,
    activeDay,
    presentDateObj,
    calendarEvents
  ).map((day) => {
    const { dayNumber, dayName, isDayDisabled, monthName, isActive } = day;

    return (
      <CalendarDay
        key={dayName + Math.random()}
        dayNumber={dayNumber}
        dayName={dayName}
        isDayDisabled={isDayDisabled}
        monthName={monthName}
        isActive={isActive}
      />
    );
  });

  return <section className="calendar-grid">{daysForGrid}</section>;
}

export default CalendarGrid;
