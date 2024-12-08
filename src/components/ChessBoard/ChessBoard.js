import React from "react";
import Tile from "../Tile/Tile";
import "./ChessBoard.css"
import { useChessBoardContext } from "../../store/context";

const ChessBoard = () => {
  const { state, dispatch } = useChessBoardContext();
  const { board, selectedTile, validMoves } = state;

  const handleTileClick = (row, col) => {
    dispatch({ type: "tile_click", payload: { row, col } });
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((tile, colIndex) => {
            const isSelected =
              selectedTile && selectedTile.row === rowIndex && selectedTile.col === colIndex;

            const isValidMove = validMoves.some(
              (move) => move.row === rowIndex && move.col === colIndex
            );

            return (
              <Tile
                key={`${rowIndex}-${colIndex}`}
                row={rowIndex}
                col={colIndex}
                tileData={tile}
                onClick={() => handleTileClick(rowIndex, colIndex)}
                isSelected={isSelected}
                isValidMove={isValidMove}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};


export default ChessBoard;
