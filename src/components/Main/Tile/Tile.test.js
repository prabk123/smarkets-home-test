import React from "react";
import { shallow } from "enzyme";
import { findByTestAtrr, checkProps } from "../../../utils";
import Tile from "./Tile";

const setUp = (props = {}) => {
  const component = shallow(<Tile {...props} />);
  return component;
};

describe("Tile Component", () => {
  describe("Has Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        event: {
          league: "Test Leage",
          HOME: {
            name: "Test Home"
          },
          AWAY: {
            name: "Test Away"
          },
          DRAW: {
            name: "Test Draw"
          },
          start: String(new Date()),
          state: "Live"
        }
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAtrr(component, "Tile");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Has NO event prop", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });

    it("Should NOT render", () => {
      const wrapper = findByTestAtrr(component, "Tile");
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
          DRAW: {
            name: "Test Draw"
          },
          start: String(new Date()),
          state: "Live"
        }
      };
      const propsErr = checkProps(Tile, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
});
