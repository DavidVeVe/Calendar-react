import helper from '../../helper'
import { CALENDAR_REDUCER_CONSTANTS } from "../../constants";
const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS

const { setDate, setMonthName, getDaysInMonth, monthConfig, setPrevMonthName } = helper

const calendarReducer = (state, action) => {
    const { year, month, day, prevMonth } = state

    switch (action.type) {
        case GET_NEXT_MONTH: {
            const nextMonth = month + 1
            const newDate = setDate(year, nextMonth, day)
            const daysInCurrentMonth = getDaysInMonth(year, nextMonth)
            const daysInPrevMonth = getDaysInMonth(year, month)
            return {
                ...state,
                date: newDate,
                month: nextMonth,
                monthName: setMonthName(newDate),
                initialDay: newDate.getDay(),
                daysInCurrentMonth,
                daysInPrevMonth,
                monthDaysConfig: monthConfig(daysInCurrentMonth, year, nextMonth),
                prevMonthName: setPrevMonthName(year, month, day),
                prevMonth: month,
                prevMonthDaysConfig: monthConfig(daysInPrevMonth, year, prevMonth)
            }
        }
        case GET_PREVIOUS_MONTH: {
            const prevMonth = month - 1
            const prevToPrevMonth = month - 2
            const newDate = setDate(year, prevMonth, day)
            const daysInCurrentMonth = getDaysInMonth(year, prevMonth)
            const daysInPrevMonth = getDaysInMonth(year, prevToPrevMonth)
            return {
                ...state,
                date: newDate,
                month: prevMonth,
                monthName: setMonthName(newDate),
                initialDay: newDate.getDay(),
                daysInCurrentMonth,
                monthDaysConfig: monthConfig(daysInCurrentMonth, year, prevMonth),
                prevMonthName: setPrevMonthName(year, prevToPrevMonth, day),
                prevMonth: prevToPrevMonth,
                daysInPrevMonth,
                prevMonthDaysConfig: monthConfig(daysInPrevMonth, year, prevToPrevMonth)
            }
        }
    }
}

export default calendarReducer
