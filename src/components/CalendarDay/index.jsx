import "./calendarDay.scss";
import { MONTHS_SHORT } from "../../constants";
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

  const dayTitle = monthName ? `${dayNumber} ${MONTHS_SHORT[monthName]}` : dayNumber

  return (
    <div className={elementClassName}>
      <span className={blockClassName}>
        <span>{dayTitle}</span>
      </span>
    </div>
  );
}

export default CalendarDay;
