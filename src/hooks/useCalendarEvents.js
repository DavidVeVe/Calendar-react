import { useReducer } from "react";
import { calendarEventsReducer } from "../reducers/calendarEventsReducer";

export const useCalendarEvents = () => {
  const [{ showModal }, dispatch] = useReducer(calendarEventsReducer, {
    showModal: false,
  });

  return {
    showModal,
  };
};
