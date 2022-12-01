import {useReducer} from "react";
import calendarReducer from "../../reducers/calendarReducer/calendarReducer";
import { CALENDAR_REDUCER_CONSTANTS } from '../../constants'

const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS

export default function useCalendar  () {
    const initialDate = new Date()

    const calendar = useReducer(calendarReducer,{
        events: [],
        month: initialDate.getMonth(),
        day: initialDate.getDate(),
        year: initialDate.getFullYear(),
        expired: false,
        showEvent: false,
        timezone: 'utc',
        date: initialDate,
        navigationEvents: {
            getNextMonth,
            getPreviousMonth,
        }
    })

    const [{ year, month, day }, dispatch] = calendar


    function getNextMonth () {
        dispatch({ type: GET_NEXT_MONTH })
    }

    function getPreviousMonth () {
        dispatch({ type: GET_PREVIOUS_MONTH })
    }

    return calendar
}
