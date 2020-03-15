import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../../utils";
import StatusBar from "./StatusBar";

const setUp = (props = {}) => {
  const component = shallow(<StatusBar {...props} />);
  return component;
};

describe("StatusBar Component", () => {
  describe("Check Render", () => {
    let component;
    beforeEach(() => {
      const props = {
        status: "live",
        start: String(new Date()),
        clock: {
          stopped: false,
          match_time: "01:30"
        },
        matchPeriod: "half_time"
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "StatusBar");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a status badge", () => {
      const wrapper = findByTestAtrr(component, "statusBadge");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a clock", () => {
      const wrapper = findByTestAtrr(component, "clock");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a date", () => {
      const wrapper = findByTestAtrr(component, "date");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        status: "live",
        start: String(new Date()),
        clock: {
          stopped: false,
          match_time: "01:30"
        },
        matchPeriod: "half_time"
      };
      const propsErr = checkProps(StatusBar, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
