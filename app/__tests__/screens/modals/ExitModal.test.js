import React from "react";
import renderer from "react-test-renderer";

import ExitModal from "../../../screens/modals/ExitModal";

describe("Exit Modal screen tests", () => {
  it("renders Exit screen correctly", () => {
    const tree = renderer.create(<ExitModal />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
