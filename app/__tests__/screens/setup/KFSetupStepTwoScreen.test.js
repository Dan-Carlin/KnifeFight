import React from "react";
import renderer from "react-test-renderer";

import KFSetupStepTwoScreen from "../../../screens/setup/KFSetupStepTwoScreen";

describe("Setup second screen tests", () => {
  it("renders second Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepTwoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // sets color value correctly when Color button tapped

  // sets checked state of buttons not selected to false

  // activates Next button when color is selected

  // stores color value when Next button is tapped
});
