import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import MarketDetail from "./MarketDetail";

const setUp = (props = {}) => {
  const component = shallow(<MarketDetail {...props} />);
  return component;
};

describe("MarketDetail Component", () => {
  describe("Has Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Test title",
        contracts: []
      };
      component = setUp(props);
    });
    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "MarketDetail");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Has NO title prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "MarketDetail");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        title: "Test Title",
        contracts: [
          {
            id: "123",
            name: "Test Name",
            percent: "45.56",
            decimal: "1.23",
            outcome: "Test Outcome"
          },
          {
            id: "123",
            name: "Test Name",
            percent: "45.56",
            decimal: "1.23",
            outcome: "Test Outcome"
          },
          {
            id: "123",
            name: "Test Name",
            percent: "45.56",
            decimal: "1.23",
            outcome: "Test Outcome"
          }
        ]
      };
      const propsErr = checkProps(MarketDetail, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
