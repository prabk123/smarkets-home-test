import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../../Utils";
import Event from "./Event";

const setUp = (initialState = {}) => {
  const props = {
    match: {},
    history: {},
    location: {}
  };
  const store = testStore(initialState);
  const wrapper = shallow(<Event {...props} store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("Event Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      popularEvents: [],
      featuredImage: null,
      event: {
        markets: [
          {
            id: "1",
            name: "Test Market 1",
            contracts: []
          },
          {
            id: "2",
            name: "Test Market 2",
            contracts: []
          },
          {
            id: "3",
            name: "Test Market 3",
            contracts: []
          }
        ]
      },
      error: null
    };
    wrapper = setUp(initialState);
  });

  it("Should render without errors", () => {
    const component = findByTestAtrr(wrapper, "Event");
    expect(component.length).toBe(1);
  });
});
