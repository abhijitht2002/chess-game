/**
 * Purpose:
 * Defines the abstract base class for all chess pieces.
 * Stores shared properties and defines the movement pattern interface.
 *
 * Related:
 * - ../board/Position.js
 * - ../types/MovementPattern.js
 */
import type { Position } from "../board/Position.js";
import type { MovementPattern } from "../types/MovementPattern.js";

export type Color = "white" | "black";

export abstract class Piece {
  constructor(
    public readonly color: Color,
    public position: Position,
  ) { }

  abstract getMovementPattern(): MovementPattern;
}
