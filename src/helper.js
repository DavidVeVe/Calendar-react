import { DAYS_OF_THE_WEEK, DAYS_IN_A_WEEK } from "./constants";

/**
 * Description updates dayIndex to slice days array with the correct dayIndex
 * @param dayIndex
 * @returns {number}
 */
const getFirstDayInMonthIndex = (dayIndex) => {
  if (dayIndex === 0) {
    dayIndex = 6;
  } else {
    dayIndex = dayIndex - 1;
  }
  return dayIndex;
};

const createDate = (y, m, d) => new Date(y, m, d);

const setDate = (y, m, d) => createDate(y, m, d);

const setMonthName = (date) =>
  date.toLocaleString("default", { month: "long" });

const setPrevMonthName = (y, m, d) =>
  createDate(y, m, d).toLocaleString("default", { month: "long" });

const getDaysInMonth = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};

const getFormattedMonthConfig = (daysInCurrentMonth, y, m) => {
  return {
    days: [...Array(daysInCurrentMonth).keys()].map((day) => {
      const dayName =
        DAYS_OF_THE_WEEK[
          new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
            setDate(y, m, day + 1)
          )
        ];
      return { dayNumber: day + 1, dayName };
    }),
    firstDayIndex: getFirstDayInMonthIndex(createDate(y, m, 1).getDay()),
    lastDayIndex: DAYS_IN_A_WEEK - createDate(y, m + 1, 0).getDay(),
  };
};

const getNewMonthValues = (month, isNextMonth) => ({
  condition: isNextMonth ? month < 11 : month > 0,
  newMonthReset: isNextMonth ? 0 : 11,
  newYear: isNextMonth ? (prev) => prev + 1 : (prev) => prev - 1,
  newMonth: isNextMonth ? (prev) => prev + 1 : (prev) => prev - 1,
  monthToGetCurrentDays: isNextMonth ? month + 1 : month - 1,
  monthToGetPrevMonthDays: isNextMonth ? month : month - 2,
  monthToGetNextMonthDays: isNextMonth ? month + 2 : month,
});

const setNewMonth = (
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
) => {
  const {
    condition,
    newMonthReset,
    newYear,
    newMonth,
    monthToGetCurrentDays,
    monthToGetPrevMonthDays,
    monthToGetNextMonthDays,
  } = getNewMonthValues(month, isNextMonth);

  if (condition) {
    monthSetter(newMonth);
    currentMonthDaysSetter(getDaysInMonth(year, monthToGetCurrentDays));
    prevMonthDaysSetter(getDaysInMonth(year, monthToGetPrevMonthDays));
    nextMonthDaysSetter(getDaysInMonth(year, monthToGetNextMonthDays));
  } else {
    yearSetter(newYear);
    monthSetter(newMonthReset);
    currentMonthDaysSetter(getDaysInMonth(year, monthToGetCurrentDays));
    prevMonthDaysSetter(getDaysInMonth(year, monthToGetPrevMonthDays));
    nextMonthDaysSetter(getDaysInMonth(year, monthToGetNextMonthDays));
  }
};

export default {
  setDate,
  setMonthName,
  getDaysInMonth,
  setPrevMonthName,
  getFormattedMonthConfig,
  setNewMonth,
};
