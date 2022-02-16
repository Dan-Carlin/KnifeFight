import React from "react";
import renderer from "react-test-renderer";

import KFToolsScreen from "../../../screens/tools/KFToolsScreen";

describe("Tools screen tests", () => {
  it("renders Tools screen correctly", () => {
    const tree = renderer.create(<KFToolsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
