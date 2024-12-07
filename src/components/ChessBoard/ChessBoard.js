import React from "react";
import Tile from "../Tile/Tile";
import "./ChessBoard.css"
import { useChessBoardContext } from "../../store/context";

const ChessBoard = () => {
  const { state, dispatch } = useChessBoardContext();
  const { board, selectedTile } = state; 

  const handleTileClick = (row, col) => {
    console.log(`Tile clicked at row: ${row}, col: ${col}`);
    console.log(row,col)
    dispatch({ type: "tile_click", payload: { row, col } });
  };

  return (
    <div className="chessboard">
      {console.log(state)}
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((tile, colIndex) => (
            <Tile
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              tileData={tile}
              onClick={() => handleTileClick(rowIndex, colIndex)}
              isSelected={selectedTile.some(
                (tile) => tile.row === rowIndex && tile.col === colIndex
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
