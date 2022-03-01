import React from "react";
import renderer from "react-test-renderer";

import KFBannerScreen from "../../../screens/tools/KFBannerScreen";

describe("Banner screen tests", () => {
  it("renders correctly", () => {
    const route = { params: { isAccesibilityModeOn: false } };

    const tree = renderer.create(<KFBannerScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
