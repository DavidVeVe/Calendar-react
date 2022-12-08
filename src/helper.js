import { DAYS_OF_THE_WEEK, SHORT_DAYS_OF_THE_WEEK } from "./constants";

const createDate = (y, m, d) => new Date(y, m, d);
const setDate = (y, m, d) => createDate(y, m, d);
const setMonthName = (date) =>
  date.toLocaleString("default", { month: "long" });
const setPrevMonthName = (y, m, d) =>
  createDate(y, m, d).toLocaleString("default", { month: "long" });
const getDaysInMonth = (y, m) => {
  return new Date(y, m + 1, 0).getDate();
};
const getFormattedMonth = (daysInCurrentMonth, y, m) => {
  return [...Array(daysInCurrentMonth).keys()].map((day) => {
    const dayName =
      DAYS_OF_THE_WEEK[
        new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
          setDate(y, m, day + 1)
        )
      ];
    return { dayNumber: day + 1, dayName };
  });
};

// const getFormattedMonth = (currentMonth, prevMonth) => {
//     const firstMonthDay = currentMonth[0].dayName
//     if (currentMonth[0].dayName !== "MON") {
//         const prevDays = SHORT_DAYS_OF_THE_WEEK[firstMonthDay]
//         const prevDaysArr = prevMonth.slice(-prevDays)
//         return [...prevDaysArr, ...currentMonth]
//     }
//     return currentMonth
// }

const getNewMonthValues = (month, isNextMonth) => ({
  condition: isNextMonth ? month < 11 : month > 0,
  newMonthReset: isNextMonth ? 0 : 11,
  newYear: isNextMonth ? (prev) => prev + 1 : (prev) => prev - 1,
  newMonth: isNextMonth ? (prev) => prev + 1 : (prev) => prev - 1,
  monthToGetDays: isNextMonth ? month + 1 : month - 1,
});

const setNewMonth = (
  { month, year, monthSetter, yearSetter, daysSetter },
  isNextMonth
) => {
  const { condition, newMonthReset, newYear, newMonth, monthToGetDays } =
    getNewMonthValues(month, isNextMonth);

  if (condition) {
    monthSetter(newMonth);
    daysSetter(getDaysInMonth(year, monthToGetDays));
  } else {
    yearSetter(newYear);
    monthSetter(newMonthReset);
    daysSetter(getDaysInMonth(year, monthToGetDays));
  }
};

export default {
  setDate,
  setMonthName,
  getDaysInMonth,
  // monthConfig,
  setPrevMonthName,
  getFormattedMonth,
  setNewMonth,
};
