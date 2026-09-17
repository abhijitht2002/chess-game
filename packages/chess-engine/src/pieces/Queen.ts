/**
 * Purpose:
 * Queen piece implementation.
 * Maps all 8 directions into a sliding pattern.
 *
 * Related:
 * - Piece.ts
 */
import { Piece } from "./Piece.js";
import type { MovementPattern } from "../types/MovementPattern.js";

export class Queen extends Piece {
  getMovementPattern(): MovementPattern {
    return {
      type: "sliding",
      directions: [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
    };
  }
}
