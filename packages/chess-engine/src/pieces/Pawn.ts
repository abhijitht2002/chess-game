/**
 * Purpose:
 * Pawn piece implementation.
 * Returns the pawn movement pattern, exact logic is in MoveGenerator.
 *
 * Related:
 * - Piece.ts
 */
import { Piece } from "./Piece.js";
import type { MovementPattern } from "../types/MovementPattern.js";

export class Pawn extends Piece {
  getMovementPattern(): MovementPattern {
    return { type: "pawn" };
  }
}
