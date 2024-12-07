export const initialBoardState = [
    [
        { type: "rook", color: "black", symbol: "♜" },
        { type: "knight", color: "black", symbol: "♞" },
        { type: "bishop", color: "black", symbol: "♝" },
        { type: "queen", color: "black", symbol: "♛" },
        { type: "king", color: "black", symbol: "♚" },
        { type: "bishop", color: "black", symbol: "♝" },
        { type: "knight", color: "black", symbol: "♞" },
        { type: "rook", color: "black", symbol: "♜" },
    ],
    Array(8).fill({ type: "pawn", color: "black", symbol: "♟" }),
    ...Array(4).fill(Array(8).fill(null)),
    Array(8).fill({ type: "pawn", color: "white", symbol: "♙" }),
    [
        { type: "rook", color: "white", symbol: "♖" },
        { type: "knight", color: "white", symbol: "♘" },
        { type: "bishop", color: "white", symbol: "♗" },
        { type: "queen", color: "white", symbol: "♕" },
        { type: "king", color: "white", symbol: "♔" },
        { type: "bishop", color: "white", symbol: "♗" },
        { type: "knight", color: "white", symbol: "♘" },
        { type: "rook", color: "white", symbol: "♖" },
    ],
];

export const createInitialState = () => {
    return {
        board: initialBoardState,
        selectedTile: []
    }
}
export function reducer(state, action) {
  switch (action.type) {
    case "tile_click": {
      const { row, col } = action.payload;
      const tileIndex = state.selectedTile.findIndex(
        (tile) => tile.row === row && tile.col === col
      );

      // If tile is already selected remove it , or add it
      const updatedSelectedTile =
        tileIndex >= 0
          ? state.selectedTile.filter((_, index) => index !== tileIndex) // remove
          : [...state.selectedTile, { row, col }]; //add

      return {
        ...state,
        selectedTile: updatedSelectedTile,
      };
    }
    default:
      return state;
  }
}

