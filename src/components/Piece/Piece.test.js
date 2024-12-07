import React from "react";
import { render } from "@testing-library/react";
import Piece from "./Piece";

describe("Piece Component", () => {
  it("renders correctly with given props", () => {
    const { container } = render(<Piece symbol="♔" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders correctly with an empty symbol", () => {
    const { container } = render(<Piece symbol="" color="black" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
