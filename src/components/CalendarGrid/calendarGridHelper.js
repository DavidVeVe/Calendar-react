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
 * @param nextMonthDays - {object}
 * @param prevMonthName - {string}
 * @param nextMonthName - {string}
 * @param currentMonthName - {string}
 * @param activeDay - {number}
 * @param presentMonth - {number}
 * @returns {array}
 */
const getDaysForGrid = (
  currentMonthDays,
  prevMonthDays,
  nextMonthDays,
  prevMonthName,
  nextMonthName,
  currentMonthName,
  activeDay,
  presentMonth
) => {
  let { firstDayIndex, lastDayIndex, days, monthName } = {
    ...currentMonthDays,
  };

  const daysWithActiveDay = days.map((day, index) => {
    const isActive = index === activeDay && monthName === presentMonth && true;
    return { ...day, isActive };
  })

  const prevMonthDaysCopy = { ...prevMonthDays };
  const nextMonthDaysCopy = { ...nextMonthDays };
  let nextMonthFirstDays =
    lastDayIndex === 7 ? [] : nextMonthDaysCopy.days.slice(0, lastDayIndex);

  const prevMonthLastDays =
    firstDayIndex === 0 ? [] : prevMonthDaysCopy.days.slice(-firstDayIndex);

  daysWithActiveDay[0].monthName = currentMonthName;

  if (firstDayIndex !== 0) {
    prevMonthLastDays.at(-1).monthName = prevMonthName;
  }

  if (lastDayIndex !== 7) {
    nextMonthFirstDays[0].monthName = nextMonthName;
  }

  const prevDays = disableDaysFromDiffMonth(prevMonthLastDays);
  const nextDays = disableDaysFromDiffMonth(nextMonthFirstDays);

  return [...prevDays, ...daysWithActiveDay, ...nextDays];
};

export default { getDaysForGrid };
