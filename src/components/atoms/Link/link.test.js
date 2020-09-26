import React from "react";
import { render, cleanup } from "@testing-library/react";
import Link from ".";

describe("Link", () => {
  afterEach(cleanup);

  it("renders correctly", () => {
    render(<Link>Link</Link>);
  });

});
