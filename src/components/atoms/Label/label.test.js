import React from "react";
import { render, cleanup } from "@testing-library/react";
import Label from ".";

describe("Label", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Label>Label</Label>);
  });

});
