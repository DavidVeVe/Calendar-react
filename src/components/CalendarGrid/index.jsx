import CalendarDay from "../CalendarDay";
import helper from "./calendarGridHelper";
import "./calendarGrid.scss";

const { getDaysForGrid } = helper;

/**
 * @param currentMonthDays {object}
 * @param calendarGridProps.prevMonthDays {object}
 * @param calendarGridProps.nextMonthDays {object}
 * @param calendarGridProps.prevMonthName {string}
 * @param calendarGridProps.nextMonthName {string}
 * @param calendarGridProps.currentMonthName {string}
 * @param calendarGridProps.activeDay {number}
 * @param calendarGridProps.presentDateObj {object}
 * @param calendarGridProps.calendarEvents {array}
 * @param calendarGridProps.handleSelectEvent {function}
 * @returns {JSX.Element}
 */
function CalendarGrid({ calendarGridProps }) {
  const { handleSelectEvent } = calendarGridProps;

  const daysForGrid = getDaysForGrid(calendarGridProps).map((day) => {
    const { dayNumber, dayName, isDayDisabled, monthName, isActive, events } =
      day;

    return (
      <CalendarDay
        key={dayName + Math.random()}
        dayNumber={dayNumber}
        dayName={dayName}
        isDayDisabled={isDayDisabled}
        monthName={monthName}
        isActive={isActive}
        events={events}
        handleSelectEvent={handleSelectEvent}
      />
    );
  });

  return <section className="calendar-grid">{daysForGrid}</section>;
}

export default CalendarGrid;
