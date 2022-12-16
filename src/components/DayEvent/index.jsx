import "./dayEvent.scss";

function DayEvent({ eventName, eventTime }) {
  return <div className="calendar-day__events__event">
  <span className="calendar-day__events__event__event-time">{eventTime}</span>
  <span className="calendar-day__events__event__event-name">{eventName}</span>
  </div>;
}

export default DayEvent;
