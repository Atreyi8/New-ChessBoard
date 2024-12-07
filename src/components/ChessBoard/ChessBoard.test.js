import { render, screen, fireEvent } from "@testing-library/react";
import ChessBoard from "./ChessBoard";
import { ChessBoardContext } from "../../store/context"; // Mocking the context provider

// Mock Tile component
jest.mock("../Tile/Tile", () => ({ row, col, onClick, isSelected }) => (
  <button
    data-testid={`tile-${row}-${col}`}
    className={isSelected ? "selected" : ""}
    onClick={onClick}
  >
    Tile {row},{col}
  </button>
));

describe("ChessBoard Component", () => {
  const mockDispatch = jest.fn();

  const mockContextValue = {
    state: {
      board: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
      selectedTile: [{ row: 1, col: 1 }],
    },
    dispatch: mockDispatch,
  };

  const renderWithContext = (component) =>
    render(
      <ChessBoardContext.Provider value={mockContextValue}>
        {component}
      </ChessBoardContext.Provider>
    );

  test("renders the chessboard correctly", () => {
    renderWithContext(<ChessBoard />);
    // Assert the number of tiles rendered
    const tiles = screen.getAllByRole("button");
    expect(tiles).toHaveLength(9); // 3x3 board in mock context

    // Check specific tile rendering
    expect(screen.getByTestId("tile-1-1")).toHaveClass("selected");
    expect(screen.getByTestId("tile-0-0")).not.toHaveClass("selected");
  });

  test("calls dispatch when a tile is clicked", () => {
    renderWithContext(<ChessBoard />);

    // Simulate a tile click
    const tile = screen.getByTestId("tile-0-0");
    fireEvent.click(tile);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "tile_click",
      payload: { row: 0, col: 0 },
    });
  });

  test("matches the snapshot", () => {
    const { asFragment } = renderWithContext(<ChessBoard />);
    expect(asFragment()).toMatchSnapshot();
  });
});
