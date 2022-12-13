import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import { MONTHS } from "../constants";
import { useState } from "react";
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
  const [month, setMonth] = useState(date.getMonth());

  const prevMonthNumber = month - 1;
  const nextMonthNumber = month + 1;

  const [year, setYear] = useState(date.getFullYear());

  const [currentMonthDays, setCurrentMonthDays] = useState(
    getDaysInMonth(year, month)
  );
  const [prevMonthDays, setPrevMonthDays] = useState(
    getDaysInMonth(year, prevMonthNumber)
  );

  const [nextMonthDays, setNextMonthDays] = useState(
    getDaysInMonth(year, nextMonthNumber)
  );

  const [activeDay, setActiveDay] = useState(date.getDate() - 1);

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

  const prevMonthName = setMonthName(createDate(year, prevMonthNumber, 1));
  const nextMonthName = setMonthName(createDate(year, nextMonthNumber, 1));
  const currentMonthName = setMonthName(createDate(year, month, 1));

  const monthFormatted = getFormattedMonthConfig(currentMonthDays, year, month);
  const prevMonthFormatted = getFormattedMonthConfig(
    prevMonthDays,
    year,
    prevMonthNumber
  );
  const nextMonthFormatted = getFormattedMonthConfig(
    nextMonthDays,
    year,
    nextMonthNumber
  );

  const presentMonth = setMonthName(date)

  return (
    <div className="calendar">
      <CalendarNavigation
        getNextMonth={() => setNewMonth({ ...setNewMonthArgs }, true)}
        getPrevMonth={() => setNewMonth({ ...setNewMonthArgs }, false)}
        calendarTitle={`${MONTHS[month]} ${year}`}
      />
      <CalendarGrid
        currentMonthDays={monthFormatted}
        prevMonthDays={prevMonthFormatted}
        nextMonthDays={nextMonthFormatted}
        prevMonthName={prevMonthName}
        nextMonthName={nextMonthName}
        currentMonthName={currentMonthName}
        activeDay={activeDay}
        presentMonth={presentMonth}
      />
    </div>
  );
}

export default Calendar;
