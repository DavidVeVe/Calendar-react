import { useState } from "react";
import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import EventModal from "../components/EventModal";
import { MONTHS } from "../constants";
import { useCalendarEvents } from "../hooks/useCalendarEvents";
import helper from "../helper";

const {
  setNewMonth,
  getFormattedMonthConfig,
  getDaysInMonth,
  setMonthName,
  createDate,
} = helper;

/**
 * Description: Calendar component
 * @param date
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

  const presentMonthNumber = date.getMonth();
  const presentYearNumber = date.getFullYear();
  const presentDayNumber = date.getDate();
  const presentActiveDayNumber = presentDayNumber - 1;

  const [month, setMonth] = useState(presentMonthNumber);

  const prevMonthNumber = month - 1;
  const nextMonthNumber = month + 1;

  const [year, setYear] = useState(presentYearNumber);

  const [currentMonthDays, setCurrentMonthDays] = useState(
    getDaysInMonth(year, month)
  );
  const [prevMonthDays, setPrevMonthDays] = useState(
    getDaysInMonth(year, prevMonthNumber)
  );

  const [nextMonthDays, setNextMonthDays] = useState(
    getDaysInMonth(year, nextMonthNumber)
  );

  const [activeDay, setActiveDay] = useState(presentActiveDayNumber);

  const getToday = () => {
    setMonth(presentMonthNumber);
    setYear(presentYearNumber);
    setActiveDay(presentActiveDayNumber);
  };

  const monthSetter = (value) => {
    setMonth(value);
  };
  const yearSetter = (value) => {
    setYear(value);
  };

  const currentMonthDaysSetter = (value) => {
    setCurrentMonthDays(value);
  };

  const prevMonthDaysSetter = (value) => {
    setPrevMonthDays(value);
  };

  const nextMonthDaysSetter = (value) => {
    setNextMonthDays(value);
  };

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
