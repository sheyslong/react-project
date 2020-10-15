import React from "react";
import { render, cleanup } from "@testing-library/react";
import Input from ".";

describe("Input", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Input>Input</Input>);
  });

});
