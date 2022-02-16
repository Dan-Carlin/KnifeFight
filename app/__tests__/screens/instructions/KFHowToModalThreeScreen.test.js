import React from "react";
import renderer from "react-test-renderer";

import KFHowToModalThreeScreen from "../../../screens/instructions/KFHowToModalThreeScreen";

describe("How To Modal third screen tests", () => {
  it("renders third How To screen correctly", () => {
    const tree = renderer.create(<KFHowToModalThreeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
