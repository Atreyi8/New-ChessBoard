import React from "react";
import { render } from "@testing-library/react";
import Tile from "./Tile";

describe("Tile Component Snapshot", () => {
  const defaultProps = {
    row: 0,
    col: 0,
    tileData: { symbol: "P", color: "white" },
    onClick: jest.fn(),
    isSelected: false,
  };

  it("matches snapshot for white-tile", () => {
    const { asFragment } = render(<Tile {...defaultProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot for black-tile", () => {
    const { asFragment } = render(<Tile {...defaultProps} col={1} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot when selected", () => {
    const { asFragment } = render(<Tile {...defaultProps} isSelected />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("matches snapshot with custom hover label", () => {
    const { asFragment } = render(<Tile {...defaultProps} row={2} col={3} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
