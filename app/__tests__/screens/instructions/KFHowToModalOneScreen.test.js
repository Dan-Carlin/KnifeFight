import React from "react";
import renderer from "react-test-renderer";

import KFHowToModalOneScreen from "../../../screens/instructions/KFHowToModalOneScreen";

describe("How To Modal first screen tests", () => {
  it("renders first How To screen correctly", () => {
    const tree = renderer.create(<KFHowToModalOneScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
