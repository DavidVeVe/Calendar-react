import "./calendarDay.scss";

function CalendarDay({ dayNumber, dayName, isFromPrevMonth }) {
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

  const { elementClassName, blockClassName } = getClassNames(isFromPrevMonth);

  return (
    <div className={elementClassName}>
      <span className={blockClassName}>
        <span>{dayName}</span>
        <span>{dayNumber}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
