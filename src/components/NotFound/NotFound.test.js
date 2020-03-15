import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr } from "../../utils";
import NotFound from "./NotFound";

const setUp = (props = {}) => {
  const component = shallow(<NotFound {...props} />);
  return component;
};

describe("NotFound Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "NotFound");
    expect(wrapper.length).toBe(1);
  });
});
