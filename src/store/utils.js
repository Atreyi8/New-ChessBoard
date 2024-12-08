const isValidMove = ({ row, col }) => row >= 0 && row < 8 && col >= 0 && col < 8;

// Diagonal moves (Bishop and Queen)
const getDiagonalMoves = (row, col) => {
  const moves = [];
  for (let i = 1; i < 8; i++) {
    moves.push({ row: row + i, col: col + i }); // Bottom-right
    moves.push({ row: row + i, col: col - i }); // Bottom-left
    moves.push({ row: row - i, col: col + i }); // Top-right
    moves.push({ row: row - i, col: col - i }); // Top-left
  }
  return moves.filter(isValidMove);
};

// Horizontal and vertical moves (Rook and Queen)
const getStraightLineMoves = (row, col) => {
  const moves = [];
  for (let i = 1; i < 8; i++) {
    moves.push({ row: row + i, col }); // Down
    moves.push({ row: row - i, col }); // Up
    moves.push({ row, col: col + i }); // Right
    moves.push({ row, col: col - i }); // Left
  }
  return moves.filter(isValidMove);
};

// L shaped moves (Knight)
const getKnightMoves = (row, col) => {
  const moves = [
    { row: row + 2, col: col + 1 },
    { row: row + 2, col: col - 1 },
    { row: row - 2, col: col + 1 },
    { row: row - 2, col: col - 1 },
    { row: row + 1, col: col + 2 },
    { row: row + 1, col: col - 2 },
    { row: row - 1, col: col + 2 },
    { row: row - 1, col: col - 2 },
  ];
  return moves.filter(isValidMove);
};

// One step moves (King)
const getOneStepMoves = (row, col) => {
  const moves = [
    { row: row + 1, col },
    { row: row - 1, col },
    { row, col: col + 1 },
    { row, col: col - 1 },
    { row: row + 1, col: col + 1 },
    { row: row + 1, col: col - 1 },
    { row: row - 1, col: col + 1 },
    { row: row - 1, col: col - 1 },
  ];
  return moves.filter(isValidMove);
};

// Pawn moves (with direction)
const getPawnMoves = (row, col, tile) => {
  const moves = [];
  const direction = tile.color === "white" ? -1 : 1; // Up for white, down for black
  const forwardMove = { row: row + direction, col };
  if (isValidMove(forwardMove)) {
    moves.push(forwardMove);
  }
  return moves;
};
export const calculateValidMoves = (row, col, tile) => {
    let validMoves = [];
  
    switch (tile.type) {
      case "pawn":
        validMoves = getPawnMoves(row, col, tile);
        break;
  
      case "knight":
        validMoves = getKnightMoves(row, col);
        break;
  
      case "rook":
        validMoves = getStraightLineMoves(row, col);
        break;
  
      case "bishop":
        validMoves = getDiagonalMoves(row, col);
        break;
  
      case "queen":
        validMoves = [...getDiagonalMoves(row, col), ...getStraightLineMoves(row, col)];
        break;
  
      case "king":
        validMoves = getOneStepMoves(row, col);
        break;
  
      default:
        break;
    }
  
    return validMoves;
  };
  
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
    // [ { type: "rook", color: "black", symbol: "♜" },
    //   { type: "knight", color: "black", symbol: "♞" },
    //   { type: "bishop", color: "black", symbol: "♝" },
    //   { type: "queen", color: "black", symbol: "♛" },
    //   { type: "king", color: "black", symbol: "♚" },
    //   { type: "bishop", color: "black", symbol: "♝" },
    //   { type: "knight", color: "black", symbol: "♞" },
    //   { type: "rook", color: "black", symbol: "♜" },],
    // Array(4).fill({ type: "knight", color: "black", symbol: "♞" }),
    // Array(4).fill({ type: "rook", color: "black", symbol: "♜" }),
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

