import React from "react";
import { render, cleanup } from "@testing-library/react";
import Text from ".";

describe("Text", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Text>Text</Text>);
  });

});
