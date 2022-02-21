import React from "react";
import renderer from "react-test-renderer";

import KFBannerScreen from "../../../screens/tools/KFBannerScreen";

describe("Banner screen tests", () => {
  it("renders Banner screen correctly", () => {
    const route = { params: { isAccesibilityModeOn: false } };
    const tree = renderer.create(<KFBannerScreen route={route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // sets gang name correctly

  // sets gang name color correctly

  // sets HP label color correctly

  // sets Trait svg correctly

  // sets Trait name correctly

  // displays correct HP value

  // displays correct Health Bar width

  // sets background gradient color correctly

  // displays additional HP value when HP > 25
});
