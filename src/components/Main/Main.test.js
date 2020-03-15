import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../Utils";
import Main from "./Main";

const setUp = (initialState = {}) => {
  const props = {
    match: {},
    history: {},
    location: {}
  };
  const store = testStore(initialState);
  const wrapper = shallow(<Main {...props} store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Main Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      popularEvents: [
        {
          id: "1",
          name: "Test Name 1"
        },
        {
          id: "2",
          name: "Test Name 2"
        },
        {
          id: "3",
          name: "Test Name 3"
        }
      ],
      featuredImage: "Test Image",
      event: null,
      error: null
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "Main");
    expect(component.length).toBe(1);
  });
});
