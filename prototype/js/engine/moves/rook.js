import { isEmpty, isEnemy, isInBounds } from "../utils/index.js";

export const rookMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return [];

  const moves = [];
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  for (const [dr, dc] of directions) {
    let rm = r + dr;
    let cm = c + dc;

    while (isInBounds(rm, cm)) {
      if (isEmpty(board, rm, cm)) {
        moves.push([rm, cm]);
      } else if (isEnemy(board, rm, cm, piece.color)) {
        moves.push([rm, cm]);
        break;
      } else break;

      rm += dr;
      cm += dc;
    }
  }

  return moves;
};
