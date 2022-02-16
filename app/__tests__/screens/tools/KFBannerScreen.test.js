import React from "react";
import renderer from "react-test-renderer";

import KFBannerScreen from "../../../screens/tools/KFBannerScreen";

describe("Banner screen tests", () => {
  it("renders Banner screen correctly", () => {
    const tree = renderer.create(<KFBannerScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
