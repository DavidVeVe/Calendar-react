/**
 * Description: CalendarNavigation Component
 * @param getPrevMonth
 * @param getNextMonth
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarNavigation({ getPrevMonth, getNextMonth }) {
  return (
    <>
      <button onClick={getPrevMonth}> Prev Month </button>
      <button onClick={getNextMonth}> Next Month </button>
    </>
  );
}

export default CalendarNavigation;
