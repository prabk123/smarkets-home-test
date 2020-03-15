import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import FeatureTile from "./FeatureTile";

const setUp = (props = {}) => {
  const component = shallow(<FeatureTile {...props} />);
  return component;
};

describe("FeatureTile Component", () => {
  describe("Has Props", () => {
    let component;
    let func;
    beforeEach(() => {
      func = jest.fn();
      const props = {
        image: "test-url",
        event: {
          league: "Test Leage",
          HOME: {
            name: "Test Home",
            percent: "23.45",
            decimal: "1.34"
          },
          AWAY: {
            name: "Test Away"
          },
          start: String(new Date()),
          state: "Live"
        },
        onClick: func
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "FeatureTile");
      expect(wrapper.length).toBe(1);
    });

    it("Should render 2 teams", () => {
      const wrapper = findByTestAtrr(component, "team");
      expect(wrapper.length).toBe(2);
    });

    it("Should render a featured team", () => {
      const wrapper = findByTestAtrr(component, "feature-team");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a percent price", () => {
      const wrapper = findByTestAtrr(component, "percent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a decimal price", () => {
      const wrapper = findByTestAtrr(component, "decimal");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a status bar", () => {
      const wrapper = findByTestAtrr(component, "status");
      expect(wrapper.length).toBe(1);
    });

    it("Should emit a callback on click event", () => {
      const button = findByTestAtrr(component, "FeatureTile");
      button.simulate("click");
      const callback = func.mock.calls.length;
      expect(callback).toBe(1);
    });
  });

  describe("Has NO event prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "FeatureTile");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        event: {
          league: "Test Leage",
          HOME: {
            name: "Test Home"
          },
          AWAY: {
            name: "Test Away"
          },
          start: String(new Date()),
          state: "Live"
        },
        onClick: () => {}
      };
      const propsErr = checkProps(FeatureTile, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
