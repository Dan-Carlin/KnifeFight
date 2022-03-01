import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import renderer from "react-test-renderer";

import KFSetupStepOneScreen from "../../../screens/setup/KFSetupStepOneScreen";

describe("Setup first screen tests", () => {
  let getByPlaceholderText, getByTestId;

  it("renders correctly", () => {
    const tree = renderer.create(<KFSetupStepOneScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  beforeEach(() => {
    ({ getByPlaceholderText, getByTestId } = render(<KFSetupStepOneScreen />));
  });

  it("displays user input in text field", () => {
    const testString = "test";
    const nameInput = getByPlaceholderText(/name your gang/i);

    fireEvent.changeText(nameInput, testString);

    expect(nameInput.props.value).toBe(testString);
  });

  it("limits the text input to 25 characters", () => {
    const nameInput = getByPlaceholderText(/name your gang/i);

    expect(nameInput.props.maxLength).toBe(25);
  });

  it("generates a random gang name", () => {
    const nameInput = getByPlaceholderText(/name your gang/i);
    const generateNameButton = getByTestId("st1_btn_generateName");

    fireEvent.press(generateNameButton);

    expect(nameInput.props.value).toBeDefined();
  });

  it("displays next button when name value is not empty", () => {
    const testString = "test";
    const nameInput = getByPlaceholderText(/name your gang/i);

    fireEvent.changeText(nameInput, testString);
    const nextButton = getByTestId("st1_btn_next");

    expect(nextButton).not.toBeNull();
  });
});
