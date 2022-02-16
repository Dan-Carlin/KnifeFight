import React from "react";
import renderer from "react-test-renderer";

import KFSetupStepThreeScreen from "../../../screens/setup/KFSetupStepThreeScreen";

describe("Setup third screen tests", () => {
  it("renders third Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepThreeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
