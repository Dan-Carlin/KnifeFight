import React from "react";
import renderer from "react-test-renderer";

import KFHowToModalTwoScreen from "../../../screens/instructions/KFHowToModalTwoScreen";

describe("How To Modal second screen tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<KFHowToModalTwoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
