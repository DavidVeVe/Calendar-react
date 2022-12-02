import {useReducer} from "react";
import calendarReducer from "../../reducers/calendarReducer/calendarReducer";
import helper from "../../helper";
import { CALENDAR_REDUCER_CONSTANTS } from '../../constants'

const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS
const { setMonthName, getDaysInMonth } = helper

export default function useCalendar  () {
    const initialDate = new Date()
    const initialYear = initialDate.getFullYear()
    const initialMonth = initialDate.getMonth()

    const calendar = useReducer(calendarReducer,{
        events: [],
        month: initialMonth,
        monthName: setMonthName(initialDate),
        day: initialDate.getDate(),
        year: initialYear,
        daysInCurrentMonth: getDaysInMonth(initialYear, initialMonth),
        initialDay: initialDate.getDay(),
        expired: false,
        showEvent: false,
        timezone: 'utc',
        date: initialDate,
        navigationEvents: {
            getNextMonth,
            getPreviousMonth,
        }
    })

    const [{initialDay}, dispatch] = calendar

    function getNextMonth () {
        dispatch({ type: GET_NEXT_MONTH })
    }

    function getPreviousMonth () {
        dispatch({ type: GET_PREVIOUS_MONTH })
    }

    return calendar
}
