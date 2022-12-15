import { MONTHS_SHORT } from "../../constants";
import { getClassNames } from "./helper";
import DayEvent from "../DayEvent";
import "./calendarDay.scss";

/**
 * Description: CalendarDay Component
 * @param dayNumber - {number}
 * @param dayName - {string}
 * @param isDayDisabled - {boolean}
 * @param monthName - {string}
 * @param isActive - {boolean}
 * @param events - {array}
 * @returns {JSX.Element}
 * @constructor
 */
function CalendarDay({
  dayNumber,
  dayName,
  isDayDisabled,
  monthName,
  isActive,
  events,
}) {
  const { elementClassName, blockClassName } = getClassNames(
    isDayDisabled,
    isActive
  );

  const dayEvents = events.map((event) => {
    const { eventName } = event;
    return <DayEvent key={eventName} eventName={eventName} />;
  });

  const dayText = monthName
    ? `${dayNumber} ${MONTHS_SHORT[monthName]}`
    : dayNumber;

  return (
    <div className={elementClassName}>
      <div className={blockClassName}>
        <span>{dayText}</span>
      </div>
        <div className="calendar-day__events">
          {dayEvents}
        </div>
    </div>
  );
}

export default CalendarDay;
