import { generateBoard } from "./board.js";
import { Piece } from "./piece.js";

export const board = generateBoard();

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

  board[5][5] = Piece("PAWN", "BLACK");
  board[4][0] = Piece("PAWN", "WHITE");
}
