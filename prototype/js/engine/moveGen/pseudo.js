import { bishopMoves } from "../moves/bishop.js";
import { kingMoves } from "../moves/king.js";
import { knightMoves } from "../moves/knight.js";
import { pawnMoves } from "../moves/pawn.js";
import { queenMoves } from "../moves/queen.js";
import { rookMoves } from "../moves/rook.js";

export const getPseudoMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return [];

  switch (piece.type) {
    case "PAWN":
      return pawnMoves(board, r, c);
    case "ROOK":
      return rookMoves(board, r, c);
    case "KNIGHT":
      return knightMoves(board, r, c);
    case "BISHOP":
      return bishopMoves(board, r, c);
    case "QUEEN":
      return queenMoves(board, r, c);
    case "KING":
      return kingMoves(board, r, c);

    default:
      return [];
  }
};
