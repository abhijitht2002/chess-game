/**
 * Purpose:
 * Knight piece implementation.
 * Maps L-shaped logic into a stepping pattern.
 *
 * Related:
 * - Piece.ts
 */
import { Piece } from "./Piece.js";
import type { MovementPattern } from "../types/MovementPattern.js";
import type { Vector2D } from "../types/Vector2D.js";

export class Knight extends Piece {
  getMovementPattern(): MovementPattern {
    const offsets: Vector2D[] = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    return { type: "stepping", offsets };
  }
}
