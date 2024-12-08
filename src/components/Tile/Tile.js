import React from "react";
import Piece from "../Piece/Piece";
import "./Tile.css";

const Tile = ({ row, col, tileData, onClick, isSelected, isValidMove }) => {
  
  const validRow = row >= 0 && row < 8;
  const validCol = col >= 0 && col < 8;

  if (!validRow || !validCol) {
    return null; 
  }

  const tileClass = (row + col) % 2 === 0 ? "white-tile" : "black-tile";
  const selectedClass = isSelected ? "selected-tile" : "";
  const validMoveClass = isValidMove ? "valid-move" : "";

  return (
    <div
      className={`tile ${tileClass} ${selectedClass} ${validMoveClass}`}
      onClick={onClick}
      data-row={8 - row} // row numbers starts from 8 at the top
      data-col={String.fromCharCode(65 + col)}// row numbers starts from 8 at the top
      data-testid="tile" 
    >
      {tileData && tileData.symbol && (
        <Piece symbol={tileData.symbol} color={tileData.color} />
      )}
      <div className="hover-label">
        {String.fromCharCode(65 + col)}{8 - row}
      </div>
    </div>
  );
};

export default Tile;
