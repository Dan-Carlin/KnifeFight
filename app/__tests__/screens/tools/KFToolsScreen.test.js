import React from "react";
import renderer from "react-test-renderer";

import KFToolsScreen from "../../../screens/tools/KFToolsScreen";

jest.useFakeTimers();

describe("Tools screen tests", () => {
  it("renders Tools screen correctly", () => {
    const tree = renderer.create(<KFToolsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // decrements HP value when minus button is tapped

  // increments HP value when plus button is tapped

  // sets gang name correctly

  // sets gang name color correctly

  // sets HP label color correctly

  // sets Trait svg correctly
});
