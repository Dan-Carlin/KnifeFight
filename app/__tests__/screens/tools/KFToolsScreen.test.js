import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import AsyncStorage from "@react-native-async-storage/async-storage";

import KFToolsScreen from "../../../screens/tools/KFToolsScreen";

beforeEach(async () => {
  // jest.useFakeTimers();
  await AsyncStorage.clear();
});

describe("Setup first screen tests", () => {
  it("renders correctly", async () => {
    let tree;
    const route = { params: { isAccesibilityModeOn: false } };

    tree = renderer.create(<KFToolsScreen route={route} />).toJSON();

    await waitFor(() => {
      expect(tree).toMatchSnapshot();
    });
  });

  beforeEach(() => {
    const route = { params: { isAccesibilityModeOn: false } };
    ({ queryByText, getByTestId } = render(<KFToolsScreen route={route} />));
  });

  it("displays instructions modal when entering screen", async () => {
    const instructionsModal = getByTestId("tls_modal_instructions");

    await waitFor(() => {
      expect(instructionsModal).not.toBeNull();
    });
  });

  // it("decrements HP when minus button pressed", async () => {
  //   // const gotItButton = getByTestId("ins_btn_gotit");
  //   // fireEvent.press(gotItButton);

  //   const minusButton = getByTestId("tls_btn_minus");
  //   const hpText = getByTestId("tls_txt_hpValue");
  //   fireEvent.press(minusButton);

  //   await waitFor(() => {
  //     expect(hpText.props.hpValue).toBe(hpText.props.hpValue - 1);
  //   });
  // });

  // increments HP when plus button pressed

  // it("changes font when left arrow pressed", () => {
  //   const fontText = queryByText(/default/i);
  //   const arrowLeftButton = getByTestId("tls_btn_arrowLeft");

  //   fireEvent.press(arrowLeftButton);
  //   console.log(fontText.children.value);

  //   expect(fontText).toBe(/punk/i);
  // });

  // changes font when right arrow pressed

  // it("hides bevel when checkbox pressed", () => {
  //   const bevelCheckbox = getByTestId("tls_cb_bevel");
  //   const bevelDark = getByTestId("ndc_ast_nameBevelDark");

  //   console.log(bevelCheckbox);

  //   fireEvent.press(bevelCheckbox);

  //   expect(bevelDark).toBeNull();
  // });

  // hides shadow when checkbox pressed

  // displays exit modal when home button pressed

  // hides exit modal when cancel button pressed

  // displays dice roller modal when dice roller button pressed
});
