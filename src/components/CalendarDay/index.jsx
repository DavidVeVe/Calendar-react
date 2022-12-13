import "./calendarDay.scss";
import { getClassNames } from "./helper";

/**
 * Description: CalendarDay Component
 * @param dayNumber - {number}
 * @param dayName - {string}
 * @param isDayDisabled - {boolean}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarDay({ dayNumber, dayName, isDayDisabled }) {
  const { elementClassName, blockClassName } = getClassNames(isDayDisabled);

  return (
    <div className={elementClassName}>
      <span className={blockClassName}>
        {/*<span>{dayName}</span>*/}
        <span>{dayNumber}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
