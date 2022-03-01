import React from "react";
import renderer from "react-test-renderer";

import InstructionsModal from "../../../screens/modals/InstructionsModal";

describe("Instructions Modal screen tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<InstructionsModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
