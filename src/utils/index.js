import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test="${attr}"]`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};

export const testStore = initialState => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
};
