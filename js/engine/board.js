import { Piece } from "./piece.js";

export function generateBoard() {
  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));
  return board;
}

export function initializePieces(board) {
  const back = [
    "ROOK",
    "KNIGHT",
    "BISHOP",
    "QUEEN",
    "KING",
    "BISHOP",
    "KNIGHT",
    "ROOK",
  ];

  back.forEach((type, col) => {
    board[0][col] = Piece(type, "BLACK");
    board[7][col] = Piece(type, "WHITE");
  });

  for (let i = 0; i < 8; i++) {
    board[1][i] = Piece("PAWN", "BLACK");
    board[6][i] = Piece("PAWN", "WHITE");
  }
}

export const getPiece = (board, row, col) => {
  return board[row][col];
};

export const setPiece = (board, row, col, piece) => {
  board[row][col] = piece;
};

export const movePiece = (board, from, to) => {
  // movement logic here
};
