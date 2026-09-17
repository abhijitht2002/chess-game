/**
 * Purpose:
 * King piece implementation.
 * Maps 8 adjacent squares into a stepping pattern.
 *
 * Related:
 * - Piece.ts
 */
import { Piece } from "./Piece.js";
import type { MovementPattern } from "../types/MovementPattern.js";
import type { Vector2D } from "../types/Vector2D.js";

export class King extends Piece {
  getMovementPattern(): MovementPattern {
    const offsets: Vector2D[] = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ];

    return { type: "stepping", offsets };
  }
}
