import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import { PureLeagueBreadcrumb as LeagueBreadcrumb } from "./LeagueBreadcrumb";

const setUp = (props = {}) => {
  const component = shallow(<LeagueBreadcrumb {...props} />);
  return component;
};

describe("Breadcrumb Component", () => {
  describe("Has Props", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        history: {
          push: func
        },
        match: { test: "test" },
        location: { test: "test" },
        style: { test: "test" },
        league: "TEST LEAGUE"
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "leagueBreadcrumb");
      expect(wrapper.length).toBe(1);
    });

    it("Should render two breadcrumb items", () => {
      const wrapper = findByTestAtrr(component, "breadcrumbItem");
      expect(wrapper.length).toBe(2);
    });

    it("Should emit a callback on click event", () => {
      const button = findByTestAtrr(component, "breadcrumbItem");
      button.at(0).simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Has no league prop", () => {
    let component;
    beforeEach(() => {
      const props = {
        history: {
          push: () => {}
        },
        match: { test: "test" },
        location: { test: "test" },
        style: { test: "test" },
        league: ""
      };
      component = setUp(props);
    });
    it("Shoult NOT render component", () => {
      const wrapper = findByTestAtrr(component, "leagueBreadcrumb");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        history: {
          push: () => {}
        },
        match: {},
        location: {},
        style: {},
        league: "TEST LEAGUE"
      };
      const propsErr = checkProps(LeagueBreadcrumb, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
