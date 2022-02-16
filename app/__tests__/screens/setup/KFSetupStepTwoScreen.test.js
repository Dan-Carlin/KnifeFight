import React from "react";
import renderer from "react-test-renderer";

import KFSetupStepTwoScreen from "../../../screens/setup/KFSetupStepTwoScreen";

describe("Setup second screen tests", () => {
  it("renders second Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepTwoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
