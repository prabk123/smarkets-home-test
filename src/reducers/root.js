import { GET_EVENTS, GET_SINGLE_EVENT } from "../actions/EventActions";

const initalState = {
  popularEvents: [],
  featuredImage: null,
  event: null
};

const root = (state = initalState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      // Perform an API calls to get the popular event and organise the data as required
      return {
        ...state,
        popularEvents: action.data,
        featuredImage: action.image
      };
    case GET_SINGLE_EVENT:
      // Perform the API calls to get the single event and organise as required
      return state;
    default:
      return state;
  }
};

export default root;
