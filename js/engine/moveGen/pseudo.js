import { pawnMoves } from "../moves/pawn.js";

export const getPseudoMoves = (board, r, c) => {
  const piece = board[r][c];
  if (!piece) return [];

  switch (piece.type) {
    case "PAWN":
      return pawnMoves(board, r, c);

    default:
      return [];
  }
};
