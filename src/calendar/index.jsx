import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import { MONTHS } from "../constants";
import { useState } from "react";
import helper from "../helper";

const { setNewMonth, getFormattedMonthConfig, getDaysInMonth } = helper;

function Calendar({ date }) {
  const [month, setMonth] = useState(date.getMonth());

  const prevMonth = month - 1;
  const nextMonth = month + 1;

  const [year, setYear] = useState(date.getFullYear());
  const [currentMonthDays, setCurrentMonthDays] = useState(
    getDaysInMonth(year, month)
  );
  const [prevMonthDays, setPrevMonthDays] = useState(
    getDaysInMonth(year, prevMonth)
  );

  const [nextMonthDays, setNextMonthDays] = useState(
    getDaysInMonth(year, nextMonth)
  );

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

  const monthFormatted = getFormattedMonthConfig(currentMonthDays, year, month);
  const prevMonthFormatted = getFormattedMonthConfig(
    prevMonthDays,
    year,
    prevMonth
  );
  const nextMonthFormatted = getFormattedMonthConfig(
    nextMonthDays,
    year,
    nextMonth
  );

  return (
    <>
      <span className="">{MONTHS[month]}</span>
      <span>{year}</span>
      <CalendarNavigation
        getNextMonth={() => setNewMonth({ ...setNewMonthArgs }, true)}
        getPrevMonth={() => setNewMonth({ ...setNewMonthArgs }, false)}
      />
      <CalendarGrid
        currentMonthDays={monthFormatted}
        prevMonthDays={prevMonthFormatted}
        nextMonthDays={nextMonthFormatted}
      />
    </>
  );
}

export default Calendar;
