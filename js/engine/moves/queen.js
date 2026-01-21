import { bishopMoves } from "./bishop.js";
import { rookMoves } from "./rook.js";

export const queenMoves = (board, r, c) => {
  return [...rookMoves(board, r, c), ...bishopMoves(board, r, c)];
};
