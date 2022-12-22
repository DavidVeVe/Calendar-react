import { useState } from "react";
import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import { MONTHS } from "../constants";
import helper from "../helper";
import { useCalendar, useCalendarEvents } from "../hooks";

const { getFormattedMonthConfig, setMonthName, createDate } = helper;

/**
 * Description: Calendar component
 * @param date - {object}
 * @returns {JSX.Element}
 * @constructor
 */
function Calendar({ date }) {
  const {
    showModal,
    toggleModal,
    calendarEvents,
    selectedEventObj,
    selectEvent,
  } = useCalendarEvents();

  const {
    month,
    year,
    activeDay,
    getToday,
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    changeMonth,
    presentDateObj,
    prevMonthName,
    nextMonthName,
    currentMonthName,
  } = useCalendar(date);

  const handleSelectEvent = (value) => {
    toggleModal();
    selectEvent(value);
  };

  const calendarGridProps = {
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
    prevMonthName,
    nextMonthName,
    currentMonthName,
    activeDay,
    presentDateObj,
    calendarEvents,
    handleSelectEvent,
  };

  const isNextMonth = true;

  return (
    <div className="calendar">
      <EventModal
        showModal={showModal}
        toggleModal={toggleModal}
        event={selectedEventObj}
      />
      <CalendarNavigation
        getNextMonth={changeMonth.bind(null, isNextMonth)}
        getPrevMonth={changeMonth.bind(null, !isNextMonth)}
        getToday={getToday}
        calendarTitle={`${MONTHS[month]} ${year}`}
      />
      <CalendarGrid calendarGridProps={calendarGridProps} />
    </div>
  );
}

export default Calendar;
