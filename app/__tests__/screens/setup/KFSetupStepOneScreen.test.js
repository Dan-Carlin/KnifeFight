import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import KFSetupStepOneScreen from "../../../screens/setup/KFSetupStepOneScreen";

describe("Setup first screen tests", () => {
  it("renders first Setup screen correctly", () => {
    const tree = renderer.create(<KFSetupStepOneScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // generates a random name
  // it("generates a random name", () => {
  //   const { getByTestId, getByPlaceholderText, get } = render(
  //     <KFSetupStepOneScreen />
  //   );
  //   const button = getByTestId("btn_generateName");
  //   const textInput = getByPlaceholderText(/Name your gang/i);

  //   fireEvent.press(button);

  //   expect(textInput.value).toBeDefined();
  // });

  // activates Next button when name field is not empty

  // stores name value when next button is tapped
});
