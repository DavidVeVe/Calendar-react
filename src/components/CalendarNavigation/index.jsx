import './calendarNavigation.scss'

/**
 * Description: CalendarNavigation Component
 * @param getPrevMonth - {function}
 * @param getNextMonth - {function}
 * @param calendarTitle - {string}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarNavigation({ getPrevMonth, getNextMonth, calendarTitle }) {
  return (
    <section className="calendar__navigation">
      <span className="calendar__navigation__title" >{calendarTitle}</span>
      <button onClick={getPrevMonth}> Prev Month </button>
      <button onClick={getNextMonth}> Next Month </button>
    </section>
  );
}

export default CalendarNavigation;
