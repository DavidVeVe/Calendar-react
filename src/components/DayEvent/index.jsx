import "./dayEvent.scss";

function DayEvent({ eventName, eventTime }) {
  return (
    <button className="calendar-day__events__event">
      <span className="calendar-day__events__event__event-time">
        {eventTime}
      </span>
      <span className="calendar-day__events__event__event-name">
        {eventName}
      </span>
    </button>
  );
}

export default DayEvent;
