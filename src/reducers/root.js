import {
  GET_EVENTS,
  GET_SINGLE_EVENT,
  RESET_EVENTS,
  RESET_SINGLE_EVENT
} from "../actions/EventActions";

const initalState = {
  popularEvents: [],
  featuredImage: null,
  event: null
};

const root = (state = initalState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        popularEvents: action.data,
        featuredImage: action.image
      };
    case GET_SINGLE_EVENT:
      return {
        ...state,
        event: action.event
      };
    case RESET_EVENTS:
      return {
        ...state,
        popularEvents: action.data,
        featuredImage: action.image
      };
    case RESET_SINGLE_EVENT:
      return {
        ...state,
        event: action.event
      };
    default:
      return state;
  }
};

export default root;
