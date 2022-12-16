import "./eventModal.scss";

/**
 * @param showModal - {boolean}
 * @param toggleModal - {function}
 * @param event - {object}
 * @returns {JSX.Element}
 * @constructor
 */
function EventModal({ showModal, toggleModal, event }) {
  const { userName = '' } = event;

  const modal = showModal && (
    <div>
      <div
        className="calendar__modal calendar__modal__overlay"
        onClick={toggleModal}
      />
      <section className="calendar__modal--body">{userName}</section>
    </div>
  );

  return modal;
}

export default EventModal;
