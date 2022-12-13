/**
 * Description: Adds isDayDisabled to day object structure
 * @param days - {array}
 * @returns {array}
 */
const disableDaysFromDiffMonth = (days) => {
  return days.map((day) => {
    return { ...day, isDayDisabled: true }; //Adds isFromPrevMonth property to handle styles
  });
};

/**
 * Description: Returns array with formatted days structure in current month, including days from prev month and days from next month
 * @param currentMonthDays - {object}
 * @param prevMonthDays - {object}
 * @returns {array}
 */
const getDaysForGrid = (currentMonthDays, prevMonthDays, nextMonthDays) => {
  let { firstDayIndex, lastDayIndex, days } = { ...currentMonthDays };
  const prevMonthDaysCopy = { ...prevMonthDays };
  const nextMonthDaysCopy = { ...nextMonthDays };
  let nextMonthFirstDays =
    lastDayIndex === 7 ? [] : nextMonthDaysCopy.days.slice(0, lastDayIndex);

  const prevMonthLastDays =
      firstDayIndex === 0
      ? []
      : prevMonthDaysCopy.days.slice(-firstDayIndex);
  const prevDays = disableDaysFromDiffMonth(prevMonthLastDays);
  const nextDays = disableDaysFromDiffMonth(nextMonthFirstDays);

  return [...prevDays, ...days, ...nextDays];
};

export default { getDaysForGrid };
