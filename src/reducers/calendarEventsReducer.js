import { CALENDAR_EVENTS } from "../constants";

const { TOGGLE_MODAL } = CALENDAR_EVENTS;

export const calendarEventsReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return { ...state, showModal: action.showModal };
  }
};
