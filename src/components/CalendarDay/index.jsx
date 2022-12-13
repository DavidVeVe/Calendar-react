import "./calendarDay.scss";
import { getClassNames } from "./helper";

/**
 * Description: CalendarDay Component
 * @param dayNumber - {number}
 * @param dayName - {string}
 * @param isDayDisabled - {boolean}
 * @param monthName - {string}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarDay({ dayNumber, dayName, isDayDisabled, monthName }) {
  const { elementClassName, blockClassName } = getClassNames(isDayDisabled);

  return (
    <div className={elementClassName}>
      <span className={blockClassName}>
        {/*<span>{dayName}</span>*/}
        <span>{dayNumber}</span>
        <span>{monthName}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
