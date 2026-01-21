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
}

export let highlights = [];
export let selected = null;
export let enemy = [];

export const setHighlights = (moves) => {
  highlights = moves;
};

export const setSelected = (r, c) => {
  selected = { row: r, col: c };
};

export const setEnemy = (pos) => {
  enemy = pos;
};

export const clearUI = () => {
  highlights = [];
  selected = null;
};

export function testBoard(board) {
  for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) board[r][c] = null;

  // White king at c1
  board[7][2] = Piece("KING", "WHITE");

  // White pawn at d2 (6,3)
  board[5][0] = Piece("PAWN", "WHITE");

  // Black bishop at a4 (4,0) attacking diagonal
  board[4][5] = Piece("ROOK", "BLACK");

  // board[3][2] = Piece("QUEEN", "BLACK");
  board[5][1] = Piece("PAWN", "BLACK");
  board[5][3] = Piece("PAWN", "WHITE");

  // Other pawns for distraction
  board[6][2] = Piece("BISHOP", "WHITE");
  board[6][4] = Piece("BISHOP", "WHITE");

  board[2][3] = Piece("KNIGHT", "WHITE");
  board[2][2] = Piece("KNIGHT", "WHITE");
}
