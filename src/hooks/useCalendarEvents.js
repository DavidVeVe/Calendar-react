import { useReducer } from "react";
import { calendarEventsReducer } from "../reducers/calendarEventsReducer";
import { CALENDAR_EVENTS } from "../constants";
import { calendarEventsMock } from "../mocks/calendarEventsMock";

const { TOGGLE_MODAL } = CALENDAR_EVENTS;

export const useCalendarEvents = () => {
  const [{ showModal, calendarEvents }, dispatch] = useReducer(calendarEventsReducer, {
    showModal: false,
    calendarEvents: calendarEventsMock,
  });

  const toggleModal = () => {
    dispatch({ type: TOGGLE_MODAL, showModal: !showModal });
  };

  return {
    showModal,
    toggleModal,
    calendarEvents
  };
};
