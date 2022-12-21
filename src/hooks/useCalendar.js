import { useReducer } from "react";
import { calendarReducer } from "../reducers/calendarReducer";
import { CALENDAR_REDUCER } from "../constants";
import helper from "../helper";

const {
  GET_TODAY,
  MONTH_SETTER,
  YEAR_SETTER,
  CURRENT_MONTH_DAYS_SETTER,
  PREV_MONTH_DAYS_SETTER,
  NEXT_MONTH_DAYS_SETTER,
} = CALENDAR_REDUCER;

const { getDaysInMonth, getFormattedMonthConfig, setNewMonth } = helper;

export const useCalendar = (date) => {
  const presentDayNumberHook = date.getDate();
  const monthHook = date.getMonth();
  const presentYearNumberHook = date.getFullYear();
  const prevMonthNumberHook = monthHook - 1;
  const nextMonthNumberHook = monthHook + 1;
  const activeDayHook = presentDayNumberHook - 1;

  const [calendarObj, dispatch] = useReducer(calendarReducer, {
    presentMonthNumber: monthHook,
    presentYearNumber: presentYearNumberHook,
    presentDayNumber: presentDayNumberHook,
    presentActiveDayNumber: presentDayNumberHook - 1,
    month: monthHook,
    year: presentYearNumberHook,
    activeDay: activeDayHook,
    // currentMonthDays: getFormattedMonthConfig(
    //   getDaysInMonth(presentYearNumberHook, monthHook),
    //   presentYearNumberHook,
    //   monthHook
    // ),
    currentMonthDays: getDaysInMonth(presentYearNumberHook, monthHook),
    prevMonthDays: getDaysInMonth(presentYearNumberHook, prevMonthNumberHook),
    nextMonthDays: getDaysInMonth(presentYearNumberHook, nextMonthNumberHook),
  });

  const { month, year } = calendarObj;

  const getToday = () => {
    dispatch({
      type: GET_TODAY,
      month: monthHook,
      year: presentYearNumberHook,
      activeDay: activeDayHook,
    });
  };

  const monthSetter = (value) => {
    dispatch({ type: MONTH_SETTER, month: value });
  };

  const yearSetter = (value) => {
    dispatch({ type: YEAR_SETTER, year: value });
  };

  const currentMonthDaysSetter = (value) => {
    dispatch({ type: CURRENT_MONTH_DAYS_SETTER, currentMonthDays: value });
  };

  const prevMonthDaysSetter = (value) => {
    dispatch({ type: PREV_MONTH_DAYS_SETTER, prevMonthDays: value });
  };

  const nextMonthDaysSetter = (value) => {
    dispatch({ type: NEXT_MONTH_DAYS_SETTER, nextMonthDays: value });
  };

  const changeMonth = (isNextMonth) => {
    setNewMonth(
      {
        month,
        year,
        monthSetter,
        yearSetter,
        currentMonthDaysSetter,
        prevMonthDaysSetter,
        nextMonthDaysSetter,
      },
      isNextMonth
    );
  };

  return {
    ...calendarObj,
    getToday,
    monthSetter,
    yearSetter,
    currentMonthDaysSetter,
    prevMonthDaysSetter,
    nextMonthDaysSetter,
    changeMonth
  };
};

export default useCalendar;
