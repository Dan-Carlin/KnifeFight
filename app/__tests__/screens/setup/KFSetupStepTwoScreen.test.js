import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import KFSetupStepTwoScreen from "../../../screens/setup/KFSetupStepTwoScreen";

describe("Setup second screen tests", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<KFSetupStepTwoScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    ({ getByTestId } = render(<KFSetupStepTwoScreen />));
  });

  it("displays next button when color value is not empty", () => {
    const purpleButton = getByTestId("st2_btn_purple");

    fireEvent.press(purpleButton);
    const nextButton = getByTestId("st2_btn_next");

    expect(nextButton).not.toBeNull();
  });

  // it("deselects color button when other color button pressed", () => {
  //   const redButton = getByTestId("st2_btn_red");
  //   const cyanButton = getByTestId("st2_btn_cyan");

  //   fireEvent.press(redButton);

  //   expect(redButton.props.isSelected).toBeTrue();
  // });
});
