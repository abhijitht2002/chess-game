import { isEmpty, isEnemy, isInBounds } from "../utils";

export const knightMoves = (board, r, c) => {
  piece = board[r][c];
  if (!piece) return [];

  let moves = [];
  const offsets = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  for (const [dr, dc] of offsets) {
    const moveR = r + dr;
    const moveC = c + dc;

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
