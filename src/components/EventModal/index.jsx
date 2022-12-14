import "./eventModal.scss";

function EventModal({ showModal }) {
  const modal = showModal && (
    <section className="calendar__modal calendar__modal__overlay">
      <div className="calendar__modal--body"></div>
    </section>
  );

  return modal;
}

export default EventModal;
