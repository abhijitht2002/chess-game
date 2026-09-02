import { isEmpty, isEnemy } from "../utils/index.js";

export const pawnMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return [];

  let moves = [];
  const dir = piece.color === "WHITE" ? -1 : 1;

  //  Basic move: one square forward
  if (isEmpty(board, r + dir, c)) {
    moves.push([r + dir, c]);

    //  double pawn
    const startRow = piece.color === "WHITE" ? 6 : 1;
    if (r === startRow && isEmpty(board, r + 2 * dir, c)) {
      moves.push([r + 2 * dir, c]);
    }
  }

  //   capture
  if (isEnemy(board, r + dir, c + 1, piece.color)) {
    moves.push([r + dir, c + 1]);
  }
  if (isEnemy(board, r + dir, c - 1, piece.color)) {
    moves.push([r + dir, c - 1]);
  }

  return moves;
};
