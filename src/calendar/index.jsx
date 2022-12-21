import { useState } from "react";
import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import { MONTHS } from "../constants";
import helper from "../helper";
import { useCalendar, useCalendarEvents } from "../hooks";

const {
  setNewMonth,
  getFormattedMonthConfig,
  setMonthName,
  createDate,
} = helper;

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
    presentActiveDayNumber,
    presentDayNumber,
    presentMonthNumber,
    presentYearNumber,
    year,
    activeDay,
    getToday,
    monthSetter,
    yearSetter,
    currentMonthDaysSetter,
    prevMonthDaysSetter,
    nextMonthDaysSetter,
    currentMonthDays,
    prevMonthDays,
    nextMonthDays,
  } = useCalendar(date);

  const prevMonthNumber = month - 1;
  const nextMonthNumber = month + 1;

  const setNewMonthArgs = {
    month,
    year,
    monthSetter,
    yearSetter,
    currentMonthDaysSetter,
    prevMonthDaysSetter,
    nextMonthDaysSetter,
  };

  const handleSelectEvent = (value) => {
    toggleModal();
    selectEvent(value);
  };

  const calendarGridProps = {
    currentMonthDays: getFormattedMonthConfig(currentMonthDays, year, month),
    prevMonthDays: getFormattedMonthConfig(
      prevMonthDays,
      year,
      prevMonthNumber
    ),
    nextMonthDays: getFormattedMonthConfig(
      nextMonthDays,
      year,
      nextMonthNumber
    ),
    prevMonthName: setMonthName(createDate(year, prevMonthNumber, 1)),
    nextMonthName: setMonthName(createDate(year, nextMonthNumber, 1)),
    currentMonthName: setMonthName(createDate(year, month, 1)),
    activeDay,
    presentDateObj: {
      presentMonthNumber,
      presentYearNumber,
      presentDayNumber: presentActiveDayNumber,
    },
    calendarEvents,
    handleSelectEvent,
  };

  return (
    <div className="calendar">
      <EventModal
        showModal={showModal}
        toggleModal={toggleModal}
        event={selectedEventObj}
      />
      <CalendarNavigation
        getNextMonth={() => setNewMonth({ ...setNewMonthArgs }, true)}
        getPrevMonth={() => setNewMonth({ ...setNewMonthArgs }, false)}
        getToday={getToday}
        calendarTitle={`${MONTHS[month]} ${year}`}
      />
      <CalendarGrid calendarGridProps={calendarGridProps} />
    </div>
  );
}

export default Calendar;
