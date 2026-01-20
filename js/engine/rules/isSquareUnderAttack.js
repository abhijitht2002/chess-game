import { isInBounds } from "../utils/index.js";

export const isSquareUnderAttack = (board, r, c, enemyColor) => {
  // 1. pawn
  const pDir = enemyColor === "WHITE" ? -1 : 1;
  const pAttacks = [
    [r + pDir, c - 1],
    [r + pDir, c + 1],
  ];

  for (const [pr, pc] of pAttacks) {
    if (
      isInBounds(pr, pc) &&
      board[pr][pc] &&
      board[pr][pc].color === enemyColor &&
      board[pr][pc].type === "PAWN"
    ) {
      return true;
    }
  }

  //   2. knight
  const nDir = [
    [-2, -1],
    [-2, 1],
    [2, -1],
    [2, 1],
    [-1, -2],
    [1, -2],
    [-1, 2],
    [1, 2],
  ];

  for (const [nrd, ncd] of nDir) {
    const nr = r + nrd;
    const nc = c + ncd;

    if (
      isInBounds(nr, nc) &&
      board[nr][nc] &&
      board[nr][nc].color === enemyColor &&
      board[nr][nc].type === "KNIGHT"
    ) {
      return true;
    }
  }

  //   3. diagonals
  const dDir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1], // rook
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1], // bishop
  ];

  for (const [dr, dc] of dDir) {
    let drm = r + dr;
    let dcm = c + dc;

    while (isInBounds(drm, dcm)) {
      if (board[drm][dcm]) {
        const p = board[drm][dcm];
        if (
          p.color === enemyColor &&
          ((p.type === "ROOK" && (dr === 0 || dc === 0)) ||
            (p.type === "BISHOP" && dr !== 0 && dc !== 0) ||
            p.type === "QUEEN")
        ) {
          return true;
        }
        break;
      }
      drm += dr;
      dcm += dc;
    }
  }

  //   4. king
  const kDir = [
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const [krd, krc] of kDir) {
    const kr = r + krd;
    const kc = c + krc;

    if (
      isInBounds(kr, kc) &&
      board[kr][kc] &&
      board[kr][kc].color === enemyColor &&
      board[kr][kc].type === "KING"
    ) {
      return true;
    }
  }

  return false
};
