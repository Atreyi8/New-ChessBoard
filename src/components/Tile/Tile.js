import React from "react";
import Piece from "../Piece/Piece";
import "./Tile.css";

const Tile = ({ row, col, tileData, onClick, isSelected }) => {
  const tileClass = (row + col) % 2 === 0 ? "white-tile" : "black-tile";
  const selectedClass = isSelected ? "selected-tile" : "";

  return (
    <div
      className={`tile ${tileClass} ${selectedClass}`}
      onClick={onClick}
      data-row={8 - row} // row numbers starts from 8 at the top
      data-col={String.fromCharCode(65 + col)} // A-H cpls
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
