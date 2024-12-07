import React from "react";
import "./Piece.css";

const Piece = ({ symbol, color }) => {
  return <span className={`piece ${color}`}>{symbol}</span>;
};

export default Piece;
