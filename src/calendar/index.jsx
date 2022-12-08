import CalendarNavigation from "../components/CalendarNavigation";
import CalendarGrid from "../components/CalendarGrid";
import { MONTHS } from "../constants";
import { useState } from "react";
import helper from "../helper";

const { setNewMonth, getFormattedMonth, getDaysInMonth } = helper;

function Calendar({ date }) {
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [daysInCurrentMonth, setDaysInCurrentMonth] = useState(
    getDaysInMonth(year, month)
  );

  const monthSetter = (value) => {
    setMonth(value);
  };
  const yearSetter = (value) => {
    setYear(value);
  };

  const daysSetter = (value) => {
    setDaysInCurrentMonth(value);
  };

  const setNewMonthArgs = {
    month,
    year,
    monthSetter,
    yearSetter,
    daysSetter,
  };

  const formattedMonth = getFormattedMonth(daysInCurrentMonth, year, month);

  return (
    <>
      {MONTHS[month]}
      {year}
      <CalendarNavigation
        getNextMonth={() => setNewMonth({ ...setNewMonthArgs }, true)}
        getPrevMonth={() => setNewMonth({ ...setNewMonthArgs }, false)}
      />
      <CalendarGrid daysInCurrentMonth={formattedMonth} />
    </>
  );
}

export default Calendar;
