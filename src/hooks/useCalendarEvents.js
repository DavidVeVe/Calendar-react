import { useReducer } from "react";
import { calendarEventsReducer } from "../reducers/calendarEventsReducer";
import { CALENDAR_EVENTS } from "../constants";

const { TOGGLE_MODAL } = CALENDAR_EVENTS;

export const useCalendarEvents = () => {
  const [{ showModal }, dispatch] = useReducer(calendarEventsReducer, {
    showModal: false,
  });

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL, showModal: !showModal });
  };

  return {
    showModal,
    toggleModal,
  };
};
