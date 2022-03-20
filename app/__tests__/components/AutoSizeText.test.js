import React from "react";
import { render } from "@testing-library/react-native";

import AutoSizeText from "../../components/AutoSizeText";

describe("AutoSizeText component tests", () => {
  it("renders the correct text", () => {
    let testString = "test";

    const { queryByText } = render(<AutoSizeText children={testString} />);
    expect(queryByText("test")).not.toBeNull();
  });
});
