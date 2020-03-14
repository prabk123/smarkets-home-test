import {
  GET_EVENTS,
  GET_SINGLE_EVENT,
  RESET_EVENTS,
  RESET_SINGLE_EVENT
} from "../actions/EventActions";
import { ADD_ERROR, REMOVE_ERROR } from "../actions/ErrorActions";

const DEFAULT_STATE = {
  popularEvents: [],
  featuredImage: null,
  event: null,
  error: null
};

const root = (state = DEFAULT_STATE, action) => {
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
    case ADD_ERROR:
      return {
        ...state,
        error: action.error
      };
    case REMOVE_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default root;
