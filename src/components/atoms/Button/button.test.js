import React from "react";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import Button from ".";

describe("Button", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Button>Button</Button>);
  });

});
