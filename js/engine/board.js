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

export const movePiece = (board, fromRow, fromCol, toRow, toCol) => {
  // movement logic here
  const piece = board[fromRow][fromCol];
  if (!piece) return board;

  board[toRow][toCol] = piece;
  board[fromRow][fromCol] = null;

  return board;
};
