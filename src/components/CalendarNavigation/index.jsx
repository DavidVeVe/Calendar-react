import "./calendarNavigation.scss";

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
      <span className="calendar__navigation__title">{calendarTitle}</span>

      <div className="calendar__navigation__arrows">
        <button onClick={getPrevMonth}> Prev Month </button>
        <button onClick={getNextMonth}> Next Month </button>
      </div>

      <div className="calendar__navigation__buttons">
          <button className="calendar__navigation__buttons__today" >Today</button>
          <button>time zones</button>
      </div>
    </section>
  );
}

export default CalendarNavigation;
