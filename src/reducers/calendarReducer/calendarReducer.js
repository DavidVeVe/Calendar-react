import helper from '../../helper'
import { CALENDAR_REDUCER_CONSTANTS } from "../../constants";
const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS

const { setDate } = helper

const calendarReducer = (state, action) => {
    const { year, month, day } = state

    switch (action.type) {
        case GET_NEXT_MONTH: {
            const nextMonth = month + 1
            return {...state, date: setDate(year, nextMonth, day), month: nextMonth}
        }
        case GET_PREVIOUS_MONTH: {
            const prevMonth = month - 1
            return {...state, date: setDate(year, prevMonth, day), month: prevMonth}
        }
    }
}

export default calendarReducer
