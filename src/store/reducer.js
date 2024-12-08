import { calculateValidMoves ,initialBoardState} from "./utils";


export const createInitialState = () => {
  return {
      board: initialBoardState,
      selectedTile: null,
      validMoves: [] 
  }
}




export function reducer(state, action) {
  switch (action.type) {
    case "tile_click": {
      const { row, col } = action.payload;
    const isSameTileSelected =
        state.selectedTile && state.selectedTile.row === row && state.selectedTile.col === col;
    const updatedSelectedTile = isSameTileSelected ? null : { row, col };
    const tile = state.board[row][col];

      // Calculate valid moves 
      const validMoves = updatedSelectedTile && tile ? calculateValidMoves(row, col, tile) : [];

      return {
        ...state,
        selectedTile: updatedSelectedTile,
        validMoves,
      };
    }
    default:
      return state;
  }
}

