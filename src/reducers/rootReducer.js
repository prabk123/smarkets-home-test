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
        popularEvents: [],
        featuredImage: null
      };
    case RESET_SINGLE_EVENT:
      return {
        ...state,
        event: null
      };
    case ADD_ERROR:
      let error = {};
      switch (action.error.status) {
        case 400:
          error.status = 404;
          error.message = "The page you're looking for doesn't exist.";
          break;
        case 404:
          error.status = 404;
          error.message = "The page you're looking for doesn't exist.";
          break;
        case 429:
          error.status = 429;
          error.message =
            "This page has been accessed too many times. Please wait a minute and try again.";
          break;
        case 500:
          error.status = 500;
          error.message = "Internal server error.";
          break;
        default:
          error.status = "No Internet Connection -";
          error.message = "It seems you have lost internet connection.";
          break;
      }

      return {
        ...state,
        error
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
