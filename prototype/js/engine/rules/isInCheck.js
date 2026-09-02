import { isSquareUnderAttack } from "./isSquareUnderAttack.js";

export const isInCheck = (board, color) => {
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      const p = board[r][c];
      if (p && p.type === "KING" && p.color === color) {
        const enemy = color === "WHITE" ? "BLACK" : "WHITE";
        return isSquareUnderAttack(board, r, c, enemy);
      }
    }
  }
  return false;
};
