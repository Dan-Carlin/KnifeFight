import React from "react";
import renderer from "react-test-renderer";

import KFSetupStepThreeScreen from "../../../screens/setup/KFSetupStepThreeScreen";

describe("Setup third screen tests", () => {
  it("renders third Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepThreeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // sets trait value correctly when Trait button tapped

  // sets checked state of buttons not selected to false

  // activates Next button when trait is selected

  // stores trait value when Next button is tapped
});
