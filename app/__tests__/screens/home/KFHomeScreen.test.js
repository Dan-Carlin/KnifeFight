import React from "react";
import renderer from "react-test-renderer";

import KFHomeScreen from "../../../screens/home/KFHomeScreen";

describe("Home screen tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<KFHomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
