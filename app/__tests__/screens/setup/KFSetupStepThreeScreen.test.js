import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import KFSetupStepThreeScreen from "../../../screens/setup/KFSetupStepThreeScreen";

describe("Setup third screen tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<KFSetupStepThreeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    ({ getByTestId } = render(<KFSetupStepThreeScreen />));
  });

  it("displays next button when trait value is not empty", () => {
    const smartButton = getByTestId("st3_btn_smart");

    fireEvent.press(smartButton);
    const finishButton = getByTestId("st3_btn_finish");

    expect(finishButton).not.toBeNull();
  });
});
