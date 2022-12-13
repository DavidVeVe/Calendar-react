import "./calendarDay.scss";

/**
 * Description: CalendarDay Component
 * @param dayNumber - {number}
 * @param dayName - {string}
 * @param isDayDisabled - {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarDay({ dayNumber, dayName, isDayDisabled }) {
  const getClassNames = (condition) => {
    const initialElementClassName = "calendar-day";
    const initialBlockClassName = "calendar-day__number";
    return {
      elementClassName: condition
        ? `${initialElementClassName}--is-from-prev-month`
        : initialElementClassName,
      blockClassName: condition
        ? `${initialBlockClassName}--is-from-prev-month`
        : initialBlockClassName,
    };
  };

  const { elementClassName, blockClassName } = getClassNames(isDayDisabled);

  return (
    <div className={elementClassName}>
      <span className={blockClassName}>
        <p>{dayName}</p>
        <span>{dayNumber}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
