import {useReducer} from "react";
import calendarReducer from "../../reducers/calendarReducer/calendarReducer";
import helper from "../../helper";
import { CALENDAR_REDUCER_CONSTANTS } from '../../constants'

const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS
const { setMonthName, getDaysInMonth, monthConfig, setPrevMonthName } = helper

export default function useCalendar  () {
    const initialDate = new Date()
    const initialYear = initialDate.getFullYear()
    const initialMonth = initialDate.getMonth()
    const prevMonth = initialMonth - 1
    const initialDay = initialDate.getDay()
    const daysInCurrentMonth = getDaysInMonth(initialYear, initialMonth)
    const prevMonthName = setPrevMonthName(initialYear,prevMonth, initialDay)
    const monthDaysConfig = monthConfig(daysInCurrentMonth, initialYear, initialMonth)
    const daysInPrevMonth = getDaysInMonth(initialYear, prevMonth)
    const prevMonthDaysConfig = monthConfig(daysInPrevMonth, initialYear, prevMonth)

    const calendar = useReducer(calendarReducer,{
        events: [],
        month: initialMonth,
        monthName: setMonthName(initialDate),
        prevMonthName,
        prevMonth,
        day: initialDate.getDate(),
        year: initialYear,
        daysInCurrentMonth,
        daysInPrevMonth,
        monthDaysConfig,
        prevMonthDaysConfig,
        initialDay,
        expired: false,
        showEvent: false,
        timezone: 'utc',
        date: initialDate,
        navigationEvents: {
            getNextMonth,
            getPreviousMonth,
        }
    })

    const [{}, dispatch] = calendar

    function getNextMonth () {
        dispatch({ type: GET_NEXT_MONTH })
    }

    function getPreviousMonth () {
        dispatch({ type: GET_PREVIOUS_MONTH })
    }

    return calendar
}
