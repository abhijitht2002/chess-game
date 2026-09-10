/**
 * Purpose:
 * Defines the abstract base class for all chess pieces.
 * Stores shared properties and defines the move candidate interface.
 *
 * Related:
 * - ../board/Position.js
 */
import type { Position } from "../board/Position.js";

export type Color = "white" | "black";

export abstract class Piece {
  constructor(
    public readonly color: Color,
    public position: Position,
  ) {}

  abstract getMoveCandidates(): Position[];
}
