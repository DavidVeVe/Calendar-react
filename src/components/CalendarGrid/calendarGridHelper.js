const getDayIndexForPrevDays = (dayIndex) => {
    if (dayIndex === 0) {
        dayIndex = 6;
    } else {
        dayIndex = dayIndex - 1;
    }
    return dayIndex;
};

const getDaysForGrid = (currentMonthDays, prevMonthDays) => {
    let { dayIndex } = currentMonthDays;

    const dayIndexForPrevDays = getDayIndexForPrevDays(dayIndex);

    if (dayIndexForPrevDays === 0) {
        return currentMonthDays.days;
    }

    const prevMonthLastDays = prevMonthDays.days
        .slice(-dayIndexForPrevDays)
        .map((day) => {
            return { ...day, isFromPrevMonth: true }; //adding isFromPrevMonth property to handle styles
        });

    return prevMonthLastDays.concat(currentMonthDays.days);
};

export default { getDaysForGrid }
