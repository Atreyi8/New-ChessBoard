import React from "react";
import { render } from "@testing-library/react";
import Tile from "./Tile";

describe("Tile Component", () => {
  const defaultProps = {
    row: 0,
    col: 0,
    tileData: { symbol: "P", color: "white" },
    onClick: jest.fn(),
    isSelected: false,
    isValidMove: false,
  };

 

  it("shows white tile class for even sum of row and col", () => {
    const { container } = render(<Tile {...defaultProps} />);
    const tile = container.querySelector(".tile");
    expect(tile).toHaveClass("white-tile");
  });

  it("shows black tile class for odd sum of row and col", () => {
    const { container } = render(<Tile {...defaultProps} col={1} />);
    const tile = container.querySelector(".tile");
    expect(tile).toHaveClass("black-tile");
  });

  it("applies selected-tile class when selected", () => {
    const { container } = render(<Tile {...defaultProps} isSelected />);
    const tile = container.querySelector(".tile");
    expect(tile).toHaveClass("selected-tile");
  });

  it("applies valid-move class when isValidMove is true", () => {
    const { container } = render(<Tile {...defaultProps} isValidMove />);
    const tile = container.querySelector(".tile");
    expect(tile).toHaveClass("valid-move");
  });

  it("renders hover label with correct row and column", () => {
    const { getByText } = render(<Tile {...defaultProps} row={2} col={3} />);
    const hoverLabel = getByText("D6");
    expect(hoverLabel).toBeInTheDocument();
  });

  it("calls onClick handler when tile is clicked", () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Tile {...defaultProps} onClick={onClickMock} />
    );
    const tile = getByTestId("tile");
    tile.click();
    expect(onClickMock).toHaveBeenCalled();
  });

  it("does not crash for maximum valid row and column", () => {
    const { container } = render(
      <Tile {...defaultProps} row={7} col={7} />
    );
    const tile = container.querySelector(".tile");
    expect(tile).toBeInTheDocument();
    expect(tile).toHaveAttribute("data-row", "1");
    expect(tile).toHaveAttribute("data-col", "H");
  });

  it("handles invalid row and column gracefully", () => {
    const invalidProps = { ...defaultProps, row: 9, col: 8 };
    const { container } = render(<Tile {...invalidProps} />);
    const tile = container.querySelector(".tile");
    expect(tile).toBeNull(); 
  });
  

  it("renders no piece when tileData is null", () => {
    const { container } = render(<Tile {...defaultProps} tileData={null} />);
    const piece = container.querySelector(".piece");
    expect(piece).toBeNull();
  });
});
