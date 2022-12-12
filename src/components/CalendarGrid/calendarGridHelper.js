const getDayIndexForPrevDays = (dayIndex) => {
  if (dayIndex === 0) {
    dayIndex = 6;
  } else {
    dayIndex = dayIndex - 1;
  }
  return dayIndex;
};

const getDaysForGrid = (currentMonthDays, prevMonthDays) => {
    let { dayIndex, days } = {...currentMonthDays}
    const prevMonthDaysCopy = {...prevMonthDays}

  const dayIndexForPrevDays = getDayIndexForPrevDays(dayIndex);

  if (dayIndexForPrevDays === 0) {
    return days;
  } else {
    const prevMonthLastDays = prevMonthDaysCopy.days.slice(-dayIndexForPrevDays);
    const prevMonthLastDaysFormatted = prevMonthLastDays.map((day) => {
          return { ...day, isFromPrevMonth: true }; //adding isFromPrevMonth property to handle styles
      })

    return prevMonthLastDaysFormatted.concat(days);
  }
};

export default { getDaysForGrid };
