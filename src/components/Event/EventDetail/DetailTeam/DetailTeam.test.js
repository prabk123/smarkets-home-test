import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../../utils";
import DetailTeam from "./DetailTeam";

const setUp = (props = {}) => {
  const component = shallow(<DetailTeam {...props} />);
  return component;
};

describe("DetailTeam Component", () => {
  describe("Check Render", () => {
    let component;
    beforeEach(() => {
      const props = {
        name: "Test Name",
        winning: true,
        score: 3
      };
      component = setUp(props);
    });

    it("Should render without any errors", () => {
      const wrapper = findByTestAtrr(component, "DetailTeam");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a name", () => {
      const wrapper = findByTestAtrr(component, "name");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a score", () => {
      const wrapper = findByTestAtrr(component, "score");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Check PropTypes", () => {
    it("Should not thow a warning", () => {
      const expectedProps = {
        name: "Test Name",
        winning: true,
        score: 3
      };
      const propsErr = checkProps(DetailTeam, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
