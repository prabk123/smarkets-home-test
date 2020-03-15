import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../../utils";
import ContractDetail from "./ContractDetail";

const setUp = (props = {}) => {
  const component = shallow(<ContractDetail {...props} />);
  return component;
};

describe("ContractDetail Component", () => {
  describe("Has Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        name: "Test Name",
        percent: "20.56",
        decimal: "1.45",
        outcome: "Winner"
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "ContractDetail");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a contract name", () => {
      const wrapper = findByTestAtrr(component, "name");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a percentage price", () => {
      const wrapper = findByTestAtrr(component, "percent");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a decimal price", () => {
      const wrapper = findByTestAtrr(component, "decimal");
      expect(wrapper.length).toBe(1);
    });
    it("Should render an outcome", () => {
      const wrapper = findByTestAtrr(component, "outcome");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Has NO name prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "ContractDetail");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        name: "Test Name",
        percent: "20.56",
        decimal: "1.45",
        outcome: "Winner"
      };
      const propsErr = checkProps(ContractDetail, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
