import {
  GET_EVENTS,
  GET_SINGLE_EVENT,
  RESET_EVENTS,
  RESET_SINGLE_EVENT
} from "../actions/EventActions";
import { ADD_ERROR, REMOVE_ERROR } from "../actions/ErrorActions";
import rootReducer from "./rootReducer";

describe("Root Reducer", () => {
  const DEFAULT_STATE = {
    popularEvents: [],
    featuredImage: null,
    event: null,
    error: null
  };

  it("Should return default state", () => {
    const newState = rootReducer(DEFAULT_STATE, {});
    expect(newState).toEqual(DEFAULT_STATE);
  });

  it("Should return correct state when getting events", () => {
    const expectedState = {
      popularEvents: [
        {
          id: "Test1",
          name: "Test 1"
        },
        {
          id: "Test2",
          name: "Test 2"
        },
        {
          id: "Test3",
          name: "Test 3"
        }
      ],
      featuredImage: "Test Image",
      event: null,
      error: null
    };
    const action = {
      type: GET_EVENTS,
      data: expectedState.popularEvents,
      image: expectedState.featuredImage
    };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when resetting events", () => {
    const expectedState = {
      popularEvents: [],
      featuredImage: null,
      event: null,
      error: null
    };
    const action = { type: RESET_EVENTS };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when getting a single event", () => {
    const expectedState = {
      popularEvents: [],
      featuredImage: null,
      event: {
        id: "123",
        name: "Test Event"
      },
      error: null
    };
    const action = {
      type: GET_SINGLE_EVENT,
      event: expectedState.event
    };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when resetting a single even", () => {
    const expectedState = {
      popularEvents: [],
      featuredImage: null,
      event: null,
      error: null
    };
    const action = { type: RESET_SINGLE_EVENT };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when an error is added", () => {
    const expectedState = {
      popularEvents: [],
      featuredImage: null,
      event: null,
      error: {
        status: 404,
        message: "The page you're looking for doesn't exist."
      }
    };
    const action = { type: ADD_ERROR, error: expectedState.error };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });

  it("Should return the correct state when an error is removed", () => {
    const expectedState = {
      popularEvents: [],
      featuredImage: null,
      event: null,
      error: null
    };
    const action = { type: REMOVE_ERROR };
    const newState = rootReducer(DEFAULT_STATE, action);
    expect(newState).toEqual(expectedState);
  });
});
