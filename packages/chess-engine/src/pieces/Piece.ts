// Piece.ts

import type { Position } from "../board/Position.js";

export type Color = "white" | "black";

export abstract class Piece {
  constructor(
    public readonly color: Color,
    public position: Position,
  ) {}

  abstract getMoves(): Position[];
}
