import React from "react";
import renderer from "react-test-renderer";

import KFSetupStepOneScreen from "../../../screens/setup/KFSetupStepOneScreen";

describe("Setup first screen tests", () => {
  it("renders first Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepOneScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
