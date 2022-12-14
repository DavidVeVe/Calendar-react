import "./eventModal.scss";

function EventModal({ showModal, toggleModal }) {
  const modal = showModal && (
    <>
      <section
        className="calendar__modal calendar__modal__overlay"
        onClick={toggleModal}
      ></section>
      <div className="calendar__modal--body"></div>
    </>
  );

  return modal;
}

export default EventModal;
