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
  CHANGE_MONTH,
} = CALENDAR_REDUCER;

const {
  getDaysInMonth,
  getFormattedMonthConfig,
  setNewMonth,
  setMonthName,
  createDate,
} = helper;

export const useCalendar = (date) => {
  const presentDayNumberHook = date.getDate();
  const monthHook = date.getMonth();
  const presentYearNumberHook = date.getFullYear();
  const prevMonthNumberHook = monthHook - 1;
  const nextMonthNumberHook = monthHook + 1;
  const activeDayHook = presentDayNumberHook - 1;
  const currentMonthDaysNumber = getDaysInMonth(
    presentYearNumberHook,
    monthHook
  );
  const prevMonthDaysNumber = getDaysInMonth(
    presentYearNumberHook,
    prevMonthNumberHook
  );
  const nextMonthDaysNumber = getDaysInMonth(
    presentYearNumberHook,
    nextMonthNumberHook
  );

  const [calendarObj, dispatch] = useReducer(calendarReducer, {
    presentDayNumber: presentDayNumberHook,
    month: monthHook,
    year: presentYearNumberHook,
    activeDay: activeDayHook,
    currentMonthDays: getFormattedMonthConfig(
      currentMonthDaysNumber,
      presentYearNumberHook,
      monthHook
    ),
    prevMonthDays: getFormattedMonthConfig(
      prevMonthDaysNumber,
      presentYearNumberHook,
      monthHook
    ),
    nextMonthDays: getFormattedMonthConfig(
      nextMonthDaysNumber,
      presentYearNumberHook,
      monthHook
    ),
    prevMonthName: setMonthName(
      createDate(presentYearNumberHook, prevMonthNumberHook, 1)
    ),
    nextMonthName: setMonthName(
      createDate(presentYearNumberHook, nextMonthNumberHook, 1)
    ),
    currentMonthName: setMonthName(
      createDate(presentYearNumberHook, monthHook, 1)
    ),
    presentDateObj: {
      presentMonthNumber: monthHook,
      presentYearNumber: presentYearNumberHook,
      presentDayNumber: presentDayNumberHook - 1,
    },
  });

  const { month, year } = calendarObj;

  const getToday = () => {
    dispatch({
      type: GET_TODAY,
      month: monthHook,
      year: presentYearNumberHook,
      activeDay: activeDayHook,
      prevMonthName: setMonthName(
        createDate(presentYearNumberHook, prevMonthNumberHook, 1)
      ),
      nextMonthName: setMonthName(
        createDate(presentYearNumberHook, nextMonthNumberHook, 1)
      ),
      currentMonthName: setMonthName(
        createDate(presentYearNumberHook, monthHook, 1)
      ),
      currentMonthDays: getFormattedMonthConfig(
        currentMonthDaysNumber,
        presentYearNumberHook,
        monthHook
      ),
      prevMonthDays: getFormattedMonthConfig(
        prevMonthDaysNumber,
        presentYearNumberHook,
        monthHook
      ),
      nextMonthDays: getFormattedMonthConfig(
        nextMonthDaysNumber,
        presentYearNumberHook,
        monthHook
      ),
    });
  };

  const monthSetter = (value) => {
    dispatch({ type: MONTH_SETTER, month: value });
  };

  const yearSetter = (value) => {
    dispatch({ type: YEAR_SETTER, year: value });
  };

  const currentMonthDaysSetter = (value) => {
    dispatch({
      type: CURRENT_MONTH_DAYS_SETTER,
      currentMonthDays: getFormattedMonthConfig(value, year, month),
    });
  };

  const prevMonthDaysSetter = (value) => {
    dispatch({
      type: PREV_MONTH_DAYS_SETTER,
      prevMonthDays: getFormattedMonthConfig(value, year, month),
    });
  };

  const nextMonthDaysSetter = (value) => {
    dispatch({
      type: NEXT_MONTH_DAYS_SETTER,
      nextMonthDays: getFormattedMonthConfig(value, year, month),
    });
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

    const nextMonth = isNextMonth ? month + 2 : month;
    const prevMonth = isNextMonth ? month : month - 2;
    const currentMonth = isNextMonth ? month + 1 : month - 1;

    dispatch({
      type: CHANGE_MONTH,
      prevMonthName: setMonthName(createDate(year, prevMonth, 1)),
      nextMonthName: setMonthName(createDate(year, nextMonth, 1)),
      currentMonthName: setMonthName(createDate(year, currentMonth, 1)),
      currentMonthDays: getFormattedMonthConfig(
        getDaysInMonth(year, currentMonth),
        year,
        currentMonth
      ),
      prevMonthDays: getFormattedMonthConfig(
        getDaysInMonth(year, prevMonth),
        year,
        prevMonth
      ),
      nextMonthDays: getFormattedMonthConfig(
        getDaysInMonth(year, nextMonth),
        year,
        nextMonth
      ),
      presentDateObj: {},
    });
  };

  return {
    ...calendarObj,
    getToday,
    changeMonth,
  };
};

export default useCalendar;
