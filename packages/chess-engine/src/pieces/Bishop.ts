/**
 * Purpose:
 * Bishop piece implementation.
 * Maps diagonal logic into a sliding pattern.
 *
 * Related:
 * - Piece.ts
 */
import { Piece } from "./Piece.js";
import type { MovementPattern } from "../types/MovementPattern.js";

export class Bishop extends Piece {
  getMovementPattern(): MovementPattern {
    return {
      type: "sliding",
      directions: [
        [1, 1],
        [1, -1],
        [-1, 1],
        [-1, -1],
      ],
    };
  }
}
