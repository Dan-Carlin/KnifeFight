import React from "react";
import renderer from "react-test-renderer";
import { waitFor } from "@testing-library/react-native";

import App from "../../App";

describe("App tests", () => {
  it("renders App correctly", async () => {
    let tree;

    await waitFor(() => (tree = renderer.create(<App />).toJSON()));

    expect(tree).toMatchSnapshot();
  });
});
