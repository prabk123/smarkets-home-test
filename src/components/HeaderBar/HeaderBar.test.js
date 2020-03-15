import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../utils";
import HeaderBar from "./HeaderBar";

const setUp = (props = {}) => {
  const component = shallow(<HeaderBar {...props} />);
  return component;
};

describe("HeaderBar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without any errors", () => {
    const wrapper = findByTestAtrr(component, "HeaderBar");
    expect(wrapper.length).toBe(1);
  });
  it("Should render a logo", () => {
    const wrapper = findByTestAtrr(component, "image");
    expect(wrapper.length).toBe(1);
  });
  it("Should render info", () => {
    const wrapper = findByTestAtrr(component, "info");
    expect(wrapper.length).toBe(1);
  });
});
