import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import CategoryInfo from "./CategoryInfo";

const setUp = (props = {}) => {
  const component = shallow(<CategoryInfo {...props} />);
  return component;
};

describe("CategoryInfo Component", () => {
  describe("Has Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        sport: "Football",
        description: "Test desc"
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "CategoryInfo");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a title", () => {
      const wrapper = findByTestAtrr(component, "title");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a description", () => {
      const wrapper = findByTestAtrr(component, "description");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Has NO sport prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "CategoryInfo");
      expect(wrapper.length).toBe(0);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        sport: "Football",
        description: "Test desc"
      };
      const propsErr = checkProps(CategoryInfo, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
