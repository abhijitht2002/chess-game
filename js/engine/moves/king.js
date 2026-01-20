import { isEmpty, isEnemy, isInBounds } from "../utils";

export const kingMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return [];

  const moves = [];
  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  for (const [dr, dc] of directions) {
    moveR = r + dr;
    moveC = c + dc;

    if (
      isInBounds(moveR, moveC) &&
      (isEmpty(board, moveR, moveC) ||
        isEnemy(board, moveR, moveC, piece.color))
    ) {
      moves.push([moveR, moveC]);
    }
  }

  return moves;
};
