import helper from '../../helper'
import { CALENDAR_REDUCER_CONSTANTS } from "../../constants";
const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS

const { setDate, setMonthName, getDaysInMonth, monthConfig } = helper

const calendarReducer = (state, action) => {
    const { year, month, day } = state

    switch (action.type) {
        case GET_NEXT_MONTH: {
            const nextMonth = month + 1
            const newDate = setDate(year, nextMonth, day)
            const daysInCurrentMonth = getDaysInMonth(year, nextMonth)
            return {...state, date: newDate, month: nextMonth, monthName: setMonthName(newDate), initialDay: newDate.getDay(), daysInCurrentMonth, monthDaysConfig: monthConfig(daysInCurrentMonth, year, nextMonth)}
        }
        case GET_PREVIOUS_MONTH: {
            const prevMonth = month - 1
            const newDate = setDate(year, prevMonth, day)
            const daysInCurrentMonth = getDaysInMonth(year, prevMonth)
            return {...state, date: newDate, month: prevMonth, monthName: setMonthName(newDate), initialDay: newDate.getDay(), daysInCurrentMonth, monthDaysConfig: monthConfig(daysInCurrentMonth, year, prevMonth)}
        }
    }
}

export default calendarReducer
