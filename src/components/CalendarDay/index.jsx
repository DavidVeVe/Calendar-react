import { MONTHS_SHORT } from "../../constants";
import { getClassNames, parseEventTime } from "./helper";
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
 * @param toggleModal - {function}
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
  toggleModal,
}) {
  const { elementClassName, blockClassName } = getClassNames(
    isDayDisabled,
    isActive
  );

  const dayEvents = events.map((event) => {
    const { eventName, startTimeInMinutes, endTimeInMinutes } = event;
    return (
      <DayEvent
        key={eventName}
        eventName={eventName}
        eventTime={parseEventTime(startTimeInMinutes, endTimeInMinutes)}
        toggleModal={toggleModal}
      />
    );
  });

  const dayText = monthName
    ? `${dayNumber} ${MONTHS_SHORT[monthName]}`
    : dayNumber;

  return (
    <div className={elementClassName}>
      <div className={blockClassName}>
        <span>{dayText}</span>
      </div>
      <div className="calendar-day__events">{dayEvents}</div>
    </div>
  );
}

export default CalendarDay;
