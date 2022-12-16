import "./eventModal.scss";

/**
 * @param showModal - {boolean}
 * @param toggleModal - {function}
 * @param event - {object}
 * @returns {JSX.Element}
 * @constructor
 */
function EventModal({ showModal, toggleModal, event }) {
  const { userName, eventName, topic, date, duration,isFinished, recorded, material, startTimeInMinutes } = event;

  const modal = showModal && (
    <div>
      <div
        className="calendar__modal calendar__modal__overlay"
        onClick={toggleModal}
      />
      <section className="calendar__modal--body">
          <div className="calendar__modal__body__header">
              <div>
                  <h1>{eventName}</h1>
                  <span>Topic: {topic}</span>
              </div>
              <div>
                  {userName}
              </div>

          </div>
          <div className="calendar__modal__body__content">
              <div>
                  <p>Date</p>
                  <span>{date}</span>
              </div>
              <div>
                  <p>Time</p>
                  <p>{startTimeInMinutes}</p>
              </div>
              <div>
                  <p>Duration</p>
                  <p>{duration}</p>
              </div>
              <button>{recorded ? 'Watch recording' : 'Join'}</button>
          </div>
          <div className="calendar__modal__body__footer">
            <p>Material</p>
              <div>
                  {material.map((item) => {
                      return <a href={item.link} target="_blank">{item.name}</a>
                  })}
              </div>
          </div>
      </section>
    </div>
  );

  return modal;
}

export default EventModal;
