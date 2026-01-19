export const isInBounds = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;

export const isEmpty = (board, r, c) =>
  isInBounds(r, c) && board[r][c] === null;

export const isEnemy = (board, r, c, color) =>
  isInBounds(r, c) && board[r][c] && board[r][c].color !== color;

export const isAlly = (board, r, c, color) =>
  isInBounds(r, c) && board[r][c] && board[r][c].color === color;

export const simulateMove = (board, fromRow, fromCol, toRow, toCol) => {
  const cloneBoard = board.map((row) => row.slice());

  cloneBoard[toRow][toCol] = cloneBoard[fromRow][fromCol];
  cloneBoard[fromRow][fromCol] = null;

  return cloneBoard;
};
