import { isInCheck } from "../rules/isInCheck.js";
import { simulateMove } from "../utils/index.js";
import { getPseudoMoves } from "./pseudo.js";

export const getLegalMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return;

  const pseudoMoves = getPseudoMoves(board, r, c);
  const legalMoves = [];

  for (const [toRow, toCol] of pseudoMoves) {
    const cloneBoard = simulateMove(board, r, c, toRow, toCol);
    if (!isInCheck(cloneBoard, piece.color)) {
      legalMoves.push([toRow, toCol]);
    }
  }

  return legalMoves;
};
