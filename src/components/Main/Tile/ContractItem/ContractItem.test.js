import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../../utils";
import ContractItem from "./ContractItem";

const setUp = (props = {}) => {
  const component = shallow(<ContractItem {...props} />);
  return component;
};

describe("ContractItem Component", () => {
  describe("Has Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        item: {
          percent: "23.3",
          decimal: "1.23"
        }
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "ContractItem");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Has NO item prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "ContractItem");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        item: {
          percent: "12.34",
          decimal: "1.23"
        }
      };
      const propsErr = checkProps(ContractItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
