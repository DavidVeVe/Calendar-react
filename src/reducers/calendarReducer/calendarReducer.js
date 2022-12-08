import helper from "../../helper";
import { CALENDAR_REDUCER_CONSTANTS } from "../../constants";
const { GET_NEXT_MONTH, GET_PREVIOUS_MONTH } = CALENDAR_REDUCER_CONSTANTS;

const {
  setDate,
  setMonthName,
  getDaysInMonth,
  monthConfig,
  setPrevMonthName,
  getFormattedMonth,
} = helper;

const calendarReducer = (state, action) => {
  switch (action.type) {
    case GET_NEXT_MONTH: {
      return {
        ...state,
      };
    }
    case GET_PREVIOUS_MONTH: {
      return {
        ...state,
      };
    }
  }
};

export default calendarReducer;
