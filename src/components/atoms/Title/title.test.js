import React from "react";
import { render, cleanup } from "@testing-library/react";
import Title from ".";

describe("Title", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Title>Title</Title>);
  });

});
