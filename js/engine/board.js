const move = {
  fromRow: null,
  fromCol: null,
  toRow: null,
  toCol: null,
  captured: null,
  promotion: null,
  isCastling: false,
  isEnPassant: false
}

export function generateBoard() {
  const board = new Array(8).fill(null).map(() => new Array(8).fill(null));
  return board;
}

export const getPiece = (board, row, col) => {
  return board[row][col];
};

export const setPiece = (board, row, col, piece) => {
  board[row][col] = piece;
};

export const makeMove = (board, move) => {
  const { fromRow, fromCol, toRow, toCol } = move

  const piece = board[fromRow][fromCol]
  move.captured = board[toRow][toCol]

  board[toRow][toCol] = piece;
  board[fromRow][fromCol] = null;

  if (piece) piece.hasMoved = true;

  return move
}

export const undoMove = (board, move) => {
  const { fromRow, fromCol, toRow, toCol, captured } = move

  const piece = board[toRow][toCol]

  board[fromRow][fromCol] = piece
  board[toRow][toCol] = captured
}

export const movePiece = (board, fromRow, fromCol, toRow, toCol) => {
  // movement logic here
  const piece = board[fromRow][fromCol];
  if (!piece) return board;

  board[toRow][toCol] = piece;
  board[fromRow][fromCol] = null;

  return board;
};
