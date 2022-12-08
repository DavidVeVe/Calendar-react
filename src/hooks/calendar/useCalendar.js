import {useReducer} from "react";
import calendarReducer from "../../reducers/calendarReducer/calendarReducer";
import helper from "../../helper";
import { CALENDAR_REDUCER_CONSTANTS } from '../../constants'

const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS
const { setMonthName, getDaysInMonth, monthConfig, setPrevMonthName, getFormattedMonth } = helper

export default function useCalendar  () {
    const initialDate = new Date()

    const calendar = useReducer(calendarReducer,{
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
