import "./dayEvent.scss";

function DayEvent({ eventName, eventTime, toggleModal }) {
  return (
    <button className="calendar-day__events__event" onClick={toggleModal}>
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
